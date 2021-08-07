from flask import *
from email.message import EmailMessage
import smtplib
import os
app = Flask(__name__)

os.environ['API_USER'] = 'vhsiao36@gmail.com' #insert gmail full email here (generate temp gmail account with password)
os.environ['API_PASSWORD'] = 'nbtgomolzcszkbyf' # insert gmail email password here

API_USER = os.environ.get('API_USER')
API_PASSWORD = os.getenv('API_PASSWORD')

@app.route('/success', methods=['GET', 'POST'])
def form():

    message = request.form.get("message")
    subject = request.form.get("subject")

    msg = EmailMessage()
    msg['Subject'] = subject
    msg['From'] = 'jagannath9611@gmail.com'
    msg['To'] = 'jagannath9611@gmail.com'
    msg.set_content(message)

    with smtplib.SMTP_SSL("smtp.gmail.com", 465) as server:
        server.login(API_USER, API_PASSWORD)

        server.send_message(msg)

    return render_template("email_success.html")

if __name__ == '__main__':
   app.run(host="127.0.0.1")
