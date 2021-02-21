# db.py
from __future__ import annotations
from typing import List
import os
import pymysql
from flask import jsonify
import json
import datetime

db_user = os.environ.get('CLOUD_SQL_USERNAME')
db_password = os.environ.get('CLOUD_SQL_PASSWORD')
db_name = os.environ.get('CLOUD_SQL_DATABASE_NAME')
db_connection_name = os.environ.get('CLOUD_SQL_CONNECTION_NAME')


def open_connection():
    unix_socket = '/cloudsql/{}'.format(db_connection_name)

    if os.environ.get('GAE_ENV') == 'standard':
        # If deployed, use the local socket interface for accessing Cloud SQL
        unix_socket = '/cloudsql/{}'.format(db_connection_name)
        cnx = pymysql.connect(user=db_user, password=db_password,
                              unix_socket=unix_socket, db=db_name)
    else:
        # If running locally, use the TCP connections instead
        # Set up Cloud SQL Proxy (cloud.google.com/sql/docs/mysql/sql-proxy)
        # so that your application can use 127.0.0.1:3306 to connect to your
        # Cloud SQL instance
        host = '127.0.0.1:3304'
        cnx = pymysql.connect(user=db_user, password=db_password,
                              host=host, db=db_name)

    return cnx


def get_tasks_by_id(id: int, date: str):
    conn = open_connection()

    date = str(datetime.datetime.strptime(date, "%Y-%m-%d"))

    with conn.cursor() as cursor:
        result = cursor.execute(
            f"SELECT task_name from tasks where uid = {id} and date = '{date}';"
        )
        task_data = cursor.fetchall()
        if result > 0:
            tasks = jsonify(task_data)
        else:
            tasks = "You're all set for the day!"
    conn.close()
    return tasks


def add_task(task: str):

    conn = open_connection()

    task_list = task

    with conn.cursor() as cursor:
        for task in task_list["task_list"]:
            cursor.execute(
                'INSERT INTO tasks (uid, cname, task_name, date) VALUES(%s, %s, %s, %s)',
                (task_list["UserId"], task["category"], task["name"],
                 task_list["date"]))
    conn.commit()
    conn.close()
