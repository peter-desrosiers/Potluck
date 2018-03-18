from flask import Flask, jsonify,json, request
from flask_pymongo import PyMongo
from bson.json_util import dumps
from flask_environments import Environments
from bson.objectid import ObjectId

app = Flask("potluck")

mongo = PyMongo(app)



@app.route("/potlucks/accountID/<accountID>")
def getPotlucksAccountID(accountID):
  potlucks = mongo.db.potlucks.find({"members.accountID": int(accountID)})
  return dumps(potlucks)

@app.route("/potlucks/potluckID/<potluckID>")
def getPotlucksPotluckID(potluckID):
  potlucks = mongo.db.potlucks.find({"_id": ObjectId(potluckID)})
  return dumps(potlucks)

@app.route("/potlucks")
def getPotlucks():
  potlucks = mongo.db.potlucks.find()
  return dumps(potlucks)

@app.route('/potlucks', methods=['POST'])
def addPotluck():
    objectID = mongo.db.potlucks.insert_one(request.get_json())
    return '', 204
