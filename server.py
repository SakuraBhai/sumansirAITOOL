#!/usr/bin/env python3
"""
BDG Game AI Pattern Predictor - Local Web Server
Runs locally and automatically opens the tool in your browser.
"""

import http.server
import socketserver
import webbrowser
import os
import sys

DEFAULT_PORT = 3000
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

def run():
    port = DEFAULT_PORT
    if len(sys.argv) > 1:
        try:
            port = int(sys.argv[1])
        except ValueError:
            pass

    # Try binding, if port is in use try next ports
    max_retries = 10
    httpd = None
    for p in range(port, port + max_retries):
        try:
            socketserver.TCPServer.allow_reuse_address = True
            httpd = socketserver.TCPServer(("", p), Handler)
            port = p
            break
        except OSError:
            continue

    if not httpd:
        print(f"Error: Could not bind to any port between {port} and {port + max_retries}")
        sys.exit(1)

    url = f"http://localhost:{port}"
    print(f"=====================================================")
    print(f"🎯 BDG Game AI Predictor Tool Running Successfully!")
    print(f"🌐 Access URL: {url}")
    print(f"⚡ Server is active and listening on port {port}")
    print(f"=====================================================")

    try:
        webbrowser.open(url)
    except Exception:
        pass

    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nServer stopped.")

if __name__ == "__main__":
    run()
