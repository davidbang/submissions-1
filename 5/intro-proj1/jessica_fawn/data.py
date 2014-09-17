from flask import Flask

app = Flask (__name__)

@app.route ("/")
def home ():
    s = '''
<title>Lincoln Square BID Business List</title>
<table border = '1' style="width:100%">'''
    data = open ("Lincoln_Square_BID_Business_List.csv", "r")
    data.readline()
    for line in data:
        s = s + "<tr>"
        t = line.split(',')
        for b in t:
            s = s + "<td>" + b + "</td>"
        s = s + "</tr>"
    s = s + "</table></body>"
    data.close()
    return s

if __name__ == "__main__":
    app.debug = True
    app.run()
