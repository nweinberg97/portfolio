from http.server import SimpleHTTPRequestHandler, HTTPServer
import socketserver

PORT = 8080

class CORSRequestHandler(SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        super(CORSRequestHandler, self).end_headers()

with HTTPServer(('localhost', PORT), CORSRequestHandler) as httpd:
    print("serving at port", PORT)
    httpd.serve_forever()
