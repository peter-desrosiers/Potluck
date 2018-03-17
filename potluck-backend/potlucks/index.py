from flask import Flask, jsonify,json, request
from flask_pymongo import PyMongo
from bson.json_util import dumps
from flask_environments import Environments

app = Flask("potluck")
mongo = PyMongo(app)



@app.route("/potlucks/<accountID>")
def getPotlucksAccountID(accountID):
  potlucks = mongo.db.potlucks.find({"members.accountID": int(accountID)})
  return dumps(potlucks)

@app.route("/potlucks")
def getPotlucks():
  potlucks = mongo.db.potlucks.find()
  return dumps(potlucks)

@app.route('/potlucks', methods=['POST'])
def addPotluck():
    objectID = mongo.db.potlucks.insert_one(request.get_json())
    return '', 204
