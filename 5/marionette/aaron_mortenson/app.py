from flask import Flask,request,redirect,render_template,session,make_response
from pymongo import MongoClient
from functools import wraps
import json

mongo = MongoClient()
db = mongo["teh_database"]

app=Flask(__name__)

def read():
    cursor = collection.find()
    return toJSON(cursor)

def create(username, itemname):
    data = {
        'username': username,
        'itemname': itemname
    }
    return json.dumps({'_id': str(collection.insert(data))})

def delete(item_id):
    collection.remove({'_id': ObjectId(item_id)}, multi=False)

@app.route("/", methods=["GET","POST"])
def home():    
    return render_template("index.html")

@app.route("/places")
def places():
    places = [x  for x in db.places.find()]
    return json.dumps(places)

@app.route("/place",methods=['GET','POST','DELETE','PUT'])
@app.route("/place/<id>",methods=['GET','POST','DELETE','PUT'])
def place(id=None):
    method = request.method
    j = request.get_json();
    print method, id, j
    if id ==None:
        id =j['username']
        
    if method == "POST":
        print "HEY BUDDY WE'RE POSTING"
        j['_id']=id
        try:
            x = db.places.update({'_id':id},j,upsert=True)
        except:
            j.pop("_id",None)
            x = db.places.update({'_id':id},j)    

    return json.dumps({'result':x})
 
if __name__=="__main__":
    #app.secret_key="b0kun0p1c0c7f"
    app.debug=True
    app.run();
