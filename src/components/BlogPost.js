var React = require('react');
var domTreeImg = require('../images/webpageLoading/domTree.png');
var dnsQueryImg = require('../images/webpageLoading/dnsQuery.png');
var lookupImg = require('../images/webpageLoading/lookup.png');

var blogPosts = [
  <article className="current-blog">
    <h2 className="blog-title">
      How a webpage loads
      <span className="blog-date">November 6, 2016</span>
    </h2>

    <p className="blog-paragraph">
      A few months ago, I was interviewing a candidate and we struck upon the topic of how injecting HTML or CSS via Javascript affects your webpage. Over the next few days, I realized that not only are many people unaware of how content is loaded and updated on a webpage, they also have no idea what all the steps are that happen from pressing enter in your browser url bar to seeing content on your page. Today I'll be going into an overview of what happens while you sit there waiting for a webpage to load.
    </p>

    <p className="blog-paragraph">
      The process of loading a web page is very involved and has the ability for many variations and optimizations. In a simple case, you can break the loading process into 3 steps.

      <ul className="simple-list">
        <li className="simple-list-item">
          <span className="slight-emphasis">IP Address lookup: </span>This is the process of converting the domain name, such as example.com, to an IP Address using a DNS (Domain Name System) lookup.
        </li>
        <li className="simple-list-item">
          <span className="slight-emphasis">Server request: </span>Once the browser has the IP Address, it triggers an HTTP request to fetch the HTML for the page from the web server. The time it takes to reach the end of this step is commonly referred to as time to first byte (TTFB).
        </li>
        <li className="simple-list-item">
          <span className="slight-emphasis">Webpage creation: </span>Once the webpage recieve the initial HTML, it may trigger additional server requests, build the DOM tree, and render the page.
        </li>
      </ul>

      <figure>
        <img src={lookupImg} alt="DNS and server requests" id="server-image" />
        <figcaption>Fig 1. Display of IP Address lookup and server request</figcaption>
      </figure>
    </p>

    <p className="blog-paragraph">
      Let's take a closer look at each of these steps.
    </p>

    <h3 className="paragraph-header">IP Address Lookup</h3>
    <p className="blog-paragraph">
      The first thing that happens after entering a url is the system needs to convert the domain name to an IP address. To do this a variety of caches are checked and if no result is found, then a DNS lookup is made. The caches that may exist include a browser cache, OS cache, router cache, and a cache on the DNS servers. When you set up your DNS you can determine a TTL (time-to-live) which indicates how long the DNS record should remain in the DNS cache. If a DNS request is made and a DNS record is not found, then a query occurs. Domain names are structured in a tree hierarchy that is created by reading the domain right to left. For example, to lookup www.example.com, the query would look at a root server, then the top level domain server com and finally the example.com name server.

      <figure>
        <img src={dnsQueryImg} alt="DNS Query" id="server-image" />
        <figcaption>Fig 2. Example DNS query for www.example.com</figcaption>
      </figure>

      In this simple example, the DNS query now returns the IP Address to the client system. With this information the client will be able to query the server directly and retrieve the HTML of the page.
    </p>

    <h3 className="paragraph-header">Server request</h3>
    <p className="blog-paragraph">
      Having received the IP Address, the browser constructs an HTTP GET request to fetch information by a TCP connection to the server. This request can include a variety of information such as the User-Agent identifing the browser, cookies and a note to keep the TCP connection alive. Once the request is made, the server can respond in many ways. The request may have been a success, error, or a redirect. One common scenario is a 301 response code indicating the domain has Moved Permanently. This will likely happen if the user inputs a domain name without the www, such as example.com. The server will then redirect the user to www.example.com to improve SEO and cache-friendliness by being consistent. The browser will follow that redirect and trigger another GET request. If this request (or the original) returns a 200 Success with HTML as the response type the webpage has now officially received its first byte. The majority of the remaining works lies within the webpage.
    </p>

    <h3 className="paragraph-header">Webpage creation</h3>
    <p className="blog-paragraph">
      The webpage has received its original HTML and now starts parsing the data. If there are links to images, css, or javascript, the page will trigger additional server requests to fetch this information. The page then begins to build and render itself. The browser will create a DOM tree and a CSSDOM tree by parsing the html and css respectively. It will then combine these two trees to create a render tree.

      <figure>
        <img src={domTreeImg} alt="DOM render tree" id="server-image" />
        <figcaption>Fig 3. DOM render tree</figcaption>
      </figure>

      Now that the render tree exists, the initial page load is almost complete. The browser will complete the layout or reflow step. This is where computations take place to determine the exact geometry of the page. Finally, the page will be painted. This step does the actual rendering of tree nodes and pixels on the page. The final reflow and repaint can be repeated many times after this initial page load. Every time HTML or CSS are injected by javascript a reflow and repaint will be triggered.
    </p>

    <p className="blog-paragraph">
      After all these actions, a user finally sees the webpage. This is a simplified version of the process, but the three steps of IP address lookup, server requests, and webpage creation are at the core of every page load.
    </p>

    <p className="blog-author">
      - Allison Hall
    </p>
  </article>
];

var BlogPost = React.createClass({
  render: function () {
    return (
      blogPosts[this.props.postId]
    )
  }
});

module.exports = BlogPost;