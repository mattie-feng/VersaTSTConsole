# coding:utf-8

from flask import Flask, jsonify, render_template, request, make_response, views
from ..utils import read_config
import consts
import socket


def cors_data(data_dict):
    response = make_response(jsonify(data_dict))
    response.headers['Access-Control-Allow-Origin'] = '*'
    response.headers['Access-Control-Allow-Methods'] = 'OPTIONS,HEAD,GET,POST'
    response.headers['Access-Control-Allow-Headers'] = 'x-requested-with'
    return response


class ISCSIWrite(views.MethodView):

    def get(self):
        if request.method == 'GET':
            log_data = request.args.to_dict()
            if log_data:
                pass
        return cors_data("success")


class IscsiCreate(views.MethodView):

    def get(self):
        return render_template("iscsi_create.html")


class IscsiAll(views.MethodView):

    def get(self):
        return render_template("iscsi_all.html")


class IscsiMap(views.MethodView):

    def get(self):
        return render_template("iscsi_map.html")


class IscsiMap2(views.MethodView):

    def get(self):
        return render_template("iscsi_map2.html")


class IscsiMapModify(views.MethodView):

    def get(self):
        return render_template("iscsi_map_modify.html")


class IscsiHost(views.MethodView):

    def get(self):
        return render_template("iscsi_host.html")


class IscsiHostGroup(views.MethodView):

    def get(self):
        return render_template("iscsi_hostgroup.html")


class IscsiDiskGroup(views.MethodView):

    def get(self):
        return render_template("iscsi_diskgroup.html")


class IscsiDisk(views.MethodView):

    def get(self):
        return render_template("iscsi_disk.html")
