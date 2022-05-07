# coding:utf-8

from flask import Flask, Blueprint
from datetime import timedelta
from mgt_app.index import index_blueprint
from mgt_app.stor import stor_blueprint
from mgt_app.iscsi import iscsi_blueprint
from mgt_app.performance import performance_blueprint


def create_app():
    app = Flask(__name__)

    app.config['SEND_FILE_MAX_DEFAULT'] = timedelta(seconds=1)

    # 将蓝图注册到app
    app.register_blueprint(index_blueprint)
    app.register_blueprint(stor_blueprint)
    app.register_blueprint(iscsi_blueprint)
    app.register_blueprint(performance_blueprint)
    return app
