#pip install flask
#pip install ultralytics
#pip install Pillow
#pip freeze > requirements.txt

from flask import Flask, render_template, request, url_for, redirect, send_from_directory
from werkzeug.utils import secure_filename
from PIL import Image
from ultralytics import YOLO 
import os
from flask_cors import CORS

app = Flask(__name__)
CORS(app, supports_credentials=True)

UPLOAD_FOLDER = 'static/uploadovane_slike'
ALLOWED_EXTENSIONS={'png', 'jpg', 'jpeg', 'gif'}
MODEL_PATH = "C:/Users/Korisnik/Desktop/IT/Kurs python ML/Projekat/Analiza mog dataseta/verzija 2/best_v2.pt"
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

model=YOLO(MODEL_PATH)

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS


@app.route('/')
def index():
    return 'I ovo je nesto'

@app.route('/uploader', methods=['POST'])
def upload_image():
    if 'file' not in request.files:
        return redirect(request.url)
    file=request.files['file']
    if file.filename == '':
        return 404
    
    if file and allowed_file(file.filename):
        filename = secure_filename(file.filename)
        filepath = os.path.join(app.config['UPLOAD_FOLDER'], filename) 
        file.save(filepath) 
        results=model(filepath)
        results = model.predict(filepath, save=True, conf=0.5)
        for r in results:
            im_array = r.plot()
            #yolo cuva sliku kao bgr, sto u plot-u moramo proslijediti rgb sliku
            im = Image.fromarray(im_array[..., ::-1])
            output_path = os.path.join(app.config['UPLOAD_FOLDER'], 'processed_'+ filename)
            im.save(output_path)
        
        return send_from_directory(app.config['UPLOAD_FOLDER'], 'processed_' + filename)

    return 'done'

if __name__ =='__main__':
    app.run(debug=True)