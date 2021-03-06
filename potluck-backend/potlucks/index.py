from flask import Flask, jsonify,json, request
from flask_pymongo import PyMongo
from bson.json_util import dumps
from flask_environments import Environments
from bson.objectid import ObjectId

app = Flask("potluck")
mongo = PyMongo(app)

@app.route("/potlucks/username/<username>")
def getPotlucksUsername(username):
  potlucks = mongo.db.potlucks.find({"members.username": username})
  return dumps(potlucks)

@app.route("/potlucks/potluckID/<potluckID>")
def getPotlucksPotluckID(potluckID):
  potlucks = mongo.db.potlucks.find({"_id": ObjectId(potluckID)})
  return dumps(potlucks)

@app.route("/potlucks/potluckID/<potluckID>", methods=['PUT'])
def editPotluckPotluckID(potluckID):
  print(potluckID)
  request.get_json()['_id'] = ObjectId(request.get_json()['_id']['$oid'])
  potlucks = mongo.db.potlucks.update({"_id": ObjectId(potluckID)}, request.get_json())
  return dumps(potlucks)


@app.route("/potlucks")
def getPotlucks():
  potlucks = mongo.db.potlucks.find()
  return dumps(potlucks)

@app.route('/potlucks', methods=['POST'])
def addPotluck():
    objectID = mongo.db.potlucks.insert_one(request.get_json())
    return '', 204
