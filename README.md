# REST API

REST API is a common type of API which follows <b>REST</b> guidelines that allows softwares to communicate between each other.


## Table of contents

- [What is an API](#what-is-an-api)
- [Types of API Architecture](#types-of-api-architecture)
- [What is REST API?](#what-is-rest-api?)
- [Six Design Principles of REST API](#six-design-principles-of-rest-api)
- [Why use REST APIs?](#why-use-rest-apis?)
- [How REST APIs Work](#how-rest-apis-work?)
- [Popular Apps which use REST API](#popular-apps-which-use-rest-api)
- [Conclusion](#conclusion)
- [Thanks](#thanks)



## What is an API?
Application Programming Interface or API in short is an interface which communicates and transfer data between softwares. It has a set of guidelines and protocols to communicate. 

Let’s break this out with the same real-life example.

<table><thead><tr><th style="text-align:center">In real life</th><th style="text-align:center">In our story</th></tr></thead><tbody><tr><td style="text-align:center">Client</td><td style="text-align:center">You/Customer</td></tr><tr><td style="text-align:center">API</td><td style="text-align:center">Waiter</td></tr><tr><td style="text-align:center">Server</td><td style="text-align:center">Kitchen/Chef</td></tr><tr><td style="text-align:center">Data/Resource</td><td style="text-align:center">Food</td></tr></tbody></table>

Here the person ordering the food, you are the client. The waiter is the API, the kitchen/chef is the server, and the food is the resource requested by the client. When the client needs some resources, it requests them to the server via the API.

<img class="image" width=700 height=350 src="https://github.com/volvox747/RestAPI/blob/test/what-is-an-api%20(1).jpg" alt="What is an API">


## Types of API Architecture

An API architecture consists of rules that guide what information can be send to the client and how it shares the data. REST, SOAP, and RPC are the most popular API architectures in use today.

- ### REST
REST, which stands for representational state transfer, is a set of guidelines for scalable, lightweight, and easy-to-use APIs. A REST API (or “RESTful” API) is an API that follows REST guidelines 

- ### SOAP
SOAP or Simple Object Access Protocol is a protocol for transmitting data to nodes and can be use to build APIs.It uitlizes XML to encode information.

SOAP strictly defines how messages should be sent and what must be included in them. This makes SOAP APIs more secure than REST APIs, although the rigid guidelines also make them more code-heavy and harder to implement in general.

For this reason, SOAP is often implemented for internal data transfers that require high security

- ### RPC
The RPC (Remote Procedural Call) protocol is the most straightforward of the three architectures.They execute scripts on a server.RPC uses either JSON or XML.RPC APIs are limited in their security and capabilities, so you likely won’t see them as often as REST or SOAP APIs on the web



