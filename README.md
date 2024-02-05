# INTERACTIVE EMAIL RENDERER

## What it does
Using this microservice you can generate interactive Email Polls using AMPHTML.
For reply-contet, fallback-content and success-content a tiptap json representation is expected.
The tiptap representation will be rendered into a email representation that can be interpreted cross-platform (Outlook, Gmail, Yahoo) etc.

Due to the majority of MS Outlook versions still using the Word HTML renderer for emails components have to constructed using nested tables as basic CSS properties arent supported such as padding. 


## Result
![](https://github.com/mhxim/interactive-mail-renderer/blob/master/example.gif)