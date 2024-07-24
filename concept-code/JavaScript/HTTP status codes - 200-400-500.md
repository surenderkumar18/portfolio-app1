**Authentication logic**

[Step1]: `If the authentication logic determines that the` _user is authenticated successfully_ `, the server` _further checks_ `if the` _user is authorized_ `to access the resource.`
[Step2]: `If the user is authorized, the server responds with a 200 OK status code and a success message.`
[Step3]: `If the user is not authorized, the server responds with a 403 Forbidden status code and an error message indicating that access is denied.`
[Step4]: `If the authentication logic determines that the user is not authenticated (e.g., invalid credentials), the server responds with a 401 Unauthorized status code and an error message indicating that the login attempt is unauthorized.`

# 100 Continue:

- This status code indicates that the initial part of the request has been received and the client can continue sending the rest of the request, such as the body of an HTTP POST request.
- It's typically used when the server needs to determine if the client has permission to access a resource or to process large requests in chunks.
- For example, a server might respond with a 100 Continue status code after receiving the headers of an HTTP POST request, indicating that the client can proceed with sending the request body.

# 2xx Success:

[200 OK]() The request was successful, and the server returned the requested resource.
[201 Created]() The request was successful, and a new resource was created on the server.
[204 No Content]() The server successfully processed the request, but there is no content to return.

# 3xx Redirection:

[301 Moved Permanently]() The requested resource has been permanently moved to a new location, and future requests should use the new URL.
[302 Found / 307 Temporary Redirect]() The requested resource has been temporarily moved to a different location, and the client should use the new URL for subsequent requests.

# 4xx Client Error

[400 Bad Request]()
The _/api/auth/register_ and _/api/auth/login_ routes check if both the _username and password_ are provided in the request body. If any of them are **missing**, it returns a 400 Bad Request with an error message indicating that both are required.

[401 Unauthorized error]()
If a request is made to an unauthorized **route** (not authenticated), it returns a 401 Unauthorized error.

[403 forbidden]()
If a request is made to a route that the user is not authorized to access (forbidden), it returns a 403 Forbidden error.

[404 Not Found]()
If a request is made to a _route_ that **does not exist**, it returns a 404 Not Found error.

# 5xx Server Error:

[500 Internal Server Error]() The server encountered an unexpected condition that prevented it from fulfilling the request.
[502 Bad Gateway]() The server received an invalid response from an upstream server while trying to fulfill the request.
[503 Service Unavailable]() The server is currently unable to handle the request due to temporary overloading or maintenance.

1xx Informational:

100 Continue
101 Switching Protocols
2xx Success:

200 OK
201 Created
202 Accepted
204 No Content
3xx Redirection:

300 Multiple Choices
301 Moved Permanently
302 Found (or 307 Temporary Redirect)
304 Not Modified
307 Temporary Redirect
4xx Client Error:

400 Bad Request
401 Unauthorized
403 Forbidden
404 Not Found
405 Method Not Allowed
409 Conflict
429 Too Many Requests
5xx Server Error:

500 Internal Server Error
501 Not Implemented
502 Bad Gateway
503 Service Unavailable
504 Gateway Timeout
505 HTTP Version Not Supported
