from fastapi import FastAPI
from recordAudio import record_audio
from traduction import traduction
from trancription import transcription1
from fastapi.middleware.cors import CORSMiddleware
from extraction import nlp, matcher
from spacy.tokens import Span

app = FastAPI()

origins = [
    "http://localhost:4200",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.post("/enregistrement")
def renregistrement():
    record_audio()


@app.get("/transcription")
def transcription():
    audio_file = "recording1.wav"
    return transcription1(audio_file)


    #texte = "j ai des maux de ventre"
@app.get("/extract/{txt}")
def recup_text(txt):
    doc = nlp(txt)
    ents = []
    # Itère sur les correspondances
    for match_id, start, end in matcher(doc):
        print(start)
        # Crée un Span avec le label pour "Age"
        span = Span(doc, start, end, label="Diagnostic")
        # Actualise doc.ents avec l'ajout du span
        ents = list(ents) + [span]
    return [(ent.text) for ent in ents]


@app.get("/traduction/{text}")
def traduction1(text):
    return traduction(text)


# uvicorn main:app --reload



#print(recup_texte("j ai des maux de ventre"))

# import mysql.connector
#
# with mysql.connector.connect(
# host="localhost",
#     user="root",
#     password="12345678",
#     database="demo_python"
# ) as db :
#     with db.cursor() as c:
#         c.execute("insert into test (txt) \
#                    values ('david')")
#         db.commit()
