# REST API

REST API is a common type of API which follows <b>REST</b> guidelines that allows softwares to communicate between each other.


## Table of contents

- [What is an API](#what-is-an-api)
- [Types of API Architecture](#types-of-api-architecture)
- [What is REST API?](#what-is-rest-api)
- [Six Design Principles of REST API](#six-design-principles-of-rest-api)
- [Why use REST APIs?](#why-use-rest-apis)
- [How REST APIs Work](#how-rest-apis-work)
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






## What is REST API?

REST API is one of the popular types of API which is used in daily development these days which follow "REST" architecture.REST stands for REpresentational State Transfer.
This means that when a client requests for a resource the requested data should be responded in a standard/common manner so that the end users(i.e Clients) can interpret easily.
Clients can also modify items on the server and even add new items to the server through a REST API.



<i><strong>What does Representational state mean?</strong></i>

Consider a social media platform that you use daily, lets say Instagram. On Instagram, you post pictures, videos or a story, and you also comment, like and share on your friend's posts.

So let’s now dive a layer deep into the working of the Instagram. The photo, the location, the caption, and others that you share as a post are known as a resource. These resources are stored on the server. So, when you open Instagram and scroll through your feed, you are requesting to the server for these resources. The server receiving the request will not just share a copy of the resource back to you. You can ask why the server can't send the copy of the data/resource that is stored in it.

Just for a second, think that the photos & videos that you share on Insagram as posts is stored in <b>JSON</b>(JavaScript Object Notation) format and the servers respond to the request with the same <b>JSON</b> format.In the case of an Instagram post, there will be likes and comments; and likes are a pretty big thing on a platform with professional influencers, Right? So what would it take for someone to just change the like count of a post to 1 million and sent the updated resource back to the server. This should not be allowed, Right?

This totally spoils the integrity of the platform. So in order to avoid these unnecessary troubles, we share only the representation state of the resource, that is, the photos and videos you post, likes and comments will be stored in some other format which might be not in human readable form,but when requested sends the data in form of JSON or any other format which the client requires.  

 

This totally spoils the integrity of the platform. So in order to avoid these unnecessary troubles, we share only the representation state of the resource.



## Six Design Principles of REST API

There are 6 design principles, 5 mandatory and 1 optional, that an API should satisfy in order to qualify as a REST API. These Principles

- ### Client Server Decoupling

This principle states that the client and the server components should be isolated from each other. The client should not be able to modify anything on the server-side. The server should not be able to modify anything on the client side. The interaction between the client and the server should always be via the API.

Okay, let’s try to understand the above-mentioned point using a simple experience that we all experience in our everyday life. We all use the Facebook app, so let’s take it as an example. Has this ever happened to you, you like or comment on your friend’s profile but due to maybe internet issues, the like or comment may not have reflected on your friend’s mobile, but the like or comment would still be visible in your mobile app.

The thing that is happening here is, the Facebook app we have on our mobile is the client, it fetches the data from the Facebook server and presents it to us. When you like or comment on something, it gets first updated locally on your mobile device and is also shared with the server. But owing to network issues, the data may not have been updated in the server. So when your friend uses Facebook on his mobile, he is fetching from the Facebook server, which at the moment has not updated your action, say like or comment. This is one typical example of client-server decoupling, that we come across in our daily life.

- ### Statelessness

All calls with a REST API must be stateless. This means that every interaction between the client and server is independent, and each request and response provides all the information required to complete the interaction. Every request by the client is interpreted by the server as a brand new request — the server remembers nothing about past requests.This may lead to a question as, “If the server has no information of me stored, then how does it identify me?”

You are not logging on into your GitHub account every time you use it. You might have logged on to it some time back and unless you log out of your account, you will not be asked to sign back in. And every time you visit Github.com, you are greeted with your activity page. So how does this happens, how does the server know that you are the one accessing the Github page, and not me?

Once you log in to your Github account for the first time on your PC/laptop/mobile browser, you are telling the server that “I am the person who owns this account”. Now a session has been established. Every action you ever make, from now on will be associated with the account that has been logged on some moments ago with that exact same browser, on that exact same PC/laptop/mobile.

The time period during which the server recognizes you with your account without asking for your credentials again is called sessions. A session ends when you log out of your account, or until you reset the browser. I totally hear the question pounding inside your head “But, If REST APIs are completely stateless and are not allowed to store any information on the server side, then how can they identify myself to my account? How are these so-called “sessions” are being handled?”

When the server responds to your first login attempt, it will gather every information that might ever need to identify this computer and this browser, and send them back to the client along with your Facebook feed. These so-called “collection of information necessary to identify the user again” is called a cookie.

![image](https://user-images.githubusercontent.com/52985692/153644218-2229bd8a-4f9d-4648-b55c-8e5251899980.png)


Remember the annoying popups that you encounter whenever you open a new page, hope you understood the purpose of that.

Stateless transfers greatly reduce the amount of server memory needed and improve the odds of a successful response, since the server is not required to take additional action to retrieve old data. This ensures that these interactions are scalable: As software grows and makes more requests, developers don’t need to worry about significantly more memory being used, or overloading the server with requests.
