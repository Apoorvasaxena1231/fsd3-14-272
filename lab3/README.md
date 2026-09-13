HTTP:=HYPERTEXT TRANSFER PROTOCOL.
html=hypertext markup language.
css=cascading style sheets.
npm=node package manager.
#API
any api can be of 4 types
1.get->Read.
2.post->Create.
3.put/patch->update.
4.delete->delete.
api can be response by server with status code and Json data.api generally start with api/version.
eg. /api/v1/products
    /api/v2/products/2167
    /api/v1/users
    /api/v1/users/mohan
    /api/v1/products?S=mobile
by default browser can check only get request, to check other three request type like post put patch or delete, we required frontend or third party api tester like postman,thunderclient,echoapi.

#status code
200-ok
201-created
202-accepted
204-no content
400-bad request
401-unauthorized
403-forbiden
404-not found
500-internal server error
503-service unavailable

#server can send data
1.html content
2.html files
3.json data
4.plain text
5.css
6.jss
7.file

#server can set header to send data

1.res.writeHeader()
2.res.setHeader()

#server can set status code
1.res.statusCode()
2.res.writeHeader()

#request methods
1.get
2.post
3.put/patch
4.delete

