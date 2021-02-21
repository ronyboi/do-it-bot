# main.py
from flask import Flask, jsonify, request
from db import add_task, get_tasks_by_id

app = Flask(__name__)


@app.route('/', methods=['POST', 'GET'])
def add_tasks():
    if request.method == 'POST':
        if not request.is_json:
            return jsonify({"msg": "Missing JSON in request"}), 400

        print(request.get_json())
        add_task(request.get_json())
        return 'Task Added'

    return get_tasks_by_id()


if __name__ == '__main__':
    app.run()
