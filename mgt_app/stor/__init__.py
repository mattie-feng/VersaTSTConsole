# coding:utf-8

from flask import Flask, Blueprint

stor_blueprint = Blueprint("stor_blueprint", __name__, template_folder='templates')

from mgt_app.stor import views
