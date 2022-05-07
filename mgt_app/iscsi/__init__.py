# coding:utf-8


from flask import Flask, Blueprint

iscsi_blueprint = Blueprint("iscsi_blueprint", __name__, template_folder='templates')

from mgt_app.iscsi import views
