 

Price Comparison Website Report 

This website is a price-comparison website that is a specialized platform for earbud’s price comparison, designed to assist users in making informed purchase decisions. It empowers users to choose earbuds that match their budget and preferences. Data acquisition is accomplished through a systematic web scraping process, focusing on extracting pricing information and additional data related to earbuds from five designated websites. 

 

The websites subject to data scraping include: 

1. https://www.currys.co.uk 

2. https://www.Argos.co.uk 

3. https://www.Ebay.co.uk 

4. https://www.johnlewis.com 

5. https://www.backmarket.co.uk 

 

In developing this price comparison website, many technologies were used to ensure efficiency, reliability, and seamless user experience. Leveraging a combination of Java, multithreading, Selenium, Spring, JUnit, Express.js, MySQL, Tailwind CSS and Next.js, the platform seamlessly integrates web scraping, testing, database management, REST API and frontend development. Here is a brief description of these technologies: 

 

Java and Multithreading: The foundation of our data acquisition lies in Java, utilizing multithreading for concurrent processing. This ensures efficient and parallelized web scraping, enhancing the speed and responsiveness of data retrieval. 

 

Selenium for Web Scraping: Selenium is employed for automated web interactions, enabling dynamic content extraction during the web scraping process. This ensures accurate and real-time data collection from various online retailers. 

 

Spring for Integration: To facilitate seamless integration of web scraping processes, the Spring framework is utilized. This robust framework enhances the scalability and maintainability of the system, ensuring smooth coordination between different components. 

 

MySQL Database: Our MySQL database serves as a centralized repository for scraped data, providing a consistent and structured source of information. The Java web scraper populates this database, maintaining an up-to-date inventory of product information. 

 

JUnit for Testing Web Scraper: To validate the reliability and accuracy of the Java web scraper, JUnit is employed for unit testing. This ensures the stability of the codebase and the dependability of the web scraping mechanisms. 

 

REST API with Express.js: The backend of the website is powered by a Nodejs framework called Express.js, facilitating the creation of a RESTful API with three essential routes. This API seamlessly interacts with the MySQL database, enabling efficient handling of HTTP requests and responses. 

 

Next.js for Frontend: The frontend, developed with Next.js, leverages the power of React for efficient server-side rendering and streamlined data fetching. This ensures a responsive and dynamic user interface, with data retrieval from Express.js routes for real-time updates. 

 

Jest for Testing API Routes and Utilities: Jest is used in this project to ensure the robustness of the Express.js API and for comprehensive testing of routes and utilities. 

 

Tailwind CSS: Enhances the price-comparison website's design with its utility-first approach, providing efficient styling through pre-built classes. The framework's simplicity and consistency contribute to a visually appealing and responsive interface 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

WEBSITE PAGES  

1. Home Page: The home page serves as an inviting entry point, offering users a warm welcome to the website. Search bar icon is placed on the Navbar, which is available to all the pages ensuring an intuitive and user-friendly starting experience. 

 

 

 

2. Search Page: Upon interaction with the search bar icon, users are seamlessly redirected to the search page. Here, an aggregation of search results from all scraped websites awaits, providing users with a consolidated view of available options. 

 

 

 

3. Comparison Page: The comparison page stands as the focal point for decisive insights. Displaying the prices of the searched results, this page empowers users to conduct a comprehensive and informed price analysis. It serves as a key resource for users seeking clarity in their purchasing decisions. 

 

 

 

REST API ROUTES 

These routes collectively provide a structured and reliable API for the price comparison website, ensuring accurate data retrieval and thoughtful error handling. There are as follows: 

1. Search Route ("/api/search?q={searchTerm}&numitems=10&offset=20"): Using the GET method, this route facilitates a product search based on query parameters, including the search term, offset, and the number of items. It ensures data validity and sends a response with a JSON object containing the search item count and corresponding searched data. 

This screenshot below shows the result after using this route (where searchTerm= ‘apple,’ numitems=2 and offset=3). 

 

 

2. Product Details Route ("/api/product/:productID"): Using the GET method, it is specifically designed to fetch detailed information about a product identified by its unique ID. It queries the database using the provided product ID and responds with a JSON object containing product details. 

The screenshot below shows the result after using this route (where productID is ‘149’). 

 

 

  

 

3. Product Comparison Route ("/api/compare/:productID"): Using the GET method, it is tailored for comparing details of a specific product, including additional comparison data. It utilizes the product ID from the route parameter, fetches both product details and comparison data from the database, and responds with a comprehensive JSON object. 

The screenshot below shows the result after using this route (where productID is ‘149’). 

 

 

 

DATABASE DESIGN 

 

 

 

 

 

 

TESTS SCREENSHOTS 

ProductDao Test: A JUnit test for the ‘saveAndMerge’ method in the ProductDao class which saves, or merges data from the scraped sites to the database. 

 

 

Scrapper Concurrency Test: A JUnit test that checks if the scrapers are running concurrently. 

 

 

Utility Test: A Jest test that checks a utility used for the search route 

 

 

 

Database Connection Test: A Jest test that checks the database connection to the REST API. 

 

 

 

Routes Tests: Three Jest tests checking three routes. 

 
