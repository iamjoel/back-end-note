import tornado.ioloop
import tornado.web

port = 8000

class MainHandler(tornado.web.RequestHandler):
    def get(self):
        self.write("Hello Tornado")


if __name__ == "__main__":
    application = tornado.web.Application([
        (r"/test", MainHandler),
    ])
    application.listen(port)
    tornado.ioloop.IOLoop.current().start()