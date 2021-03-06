# Store-Supply-Website-Server 
Group 6, Members:Chenjie Bei, Yan Wang, Yutong Shang
## How we divided tasks: <br />
Front end: Commodity page, signin, signup page, save images to database and display images. Complete add, delete, and edit functions for all pages-Yan Wang <br />
Backend: creating mongoDB collections, create search commodity, update user info, signin, signup functions, save images to database and display images-Chenjie Bei <br />
Front end: User page, update page,save images to database and display images, Complete add, delete, and edit functions, maintain READMe and meeting minutes, create slides-Yutong Shang <br />



## Iteration 3 achievement
1. Completed Commodity pag, Navigation bar, sign in page, register page, user profile page, user info update page<br />
2. Searched and found solutions in saving images to database and display images on pages.
3. Completed seting up all routes and links in all pages.<br />
4. Implemented Material UI in all pages and made sure the style in all pages are consistent.<br />
5. Completed implementing CRUD operation and tested all CRUD operations<br />
6. Added supply button, Edit supply info and Update user info button will use Post method to add into database. <br />
7. Tested in local file and deployed front end and backend to heroku. https://store-supply-website.herokuapp.com/. <br />
8. Maintained a good shape in project. We made frequent commmits to our own branches and name commits meaningfully and gave detailed name or description. <br /> 
9. We made pull requests to merge to other branches. All team members review pull requests before merge. We reviewed and fixed conflicts before merging.<br />
10. Ran accessibility reports using lighthouse and fixed issues to improve accessibility score.

### To do list (completed)
-Prepare demo video(done)<br />
-Add Page images-Github(done)<br />
-Upload accessibility report(done)<br />
-Merge to main(done)<br />
-upload to canvas(done)<br />
-Prepare presentation and review slide(done)<br />
-Tag iteration (done)<<br />

## Plans to continue working on this project
-Add location function, and enable users to buy and sell locally. <br /> 
-Add wishlist and notification function.<br /> 
-Add payment function to enable uses to complete purchase.<br /> 

## Images of Web pages
<img width="1497" alt="image" src="https://user-images.githubusercontent.com/98197405/176757843-ca363826-97ae-4281-be7d-c1c57b37dfcb.png">
<img width="1514" alt="image" src="https://user-images.githubusercontent.com/98197405/176757932-1866d513-4d06-49bc-acee-5d1c9d5adf52.png">
<img width="1683" alt="image" src="https://user-images.githubusercontent.com/98197405/176843603-2bd3fd53-3ac9-47e4-82bf-608117aa3263.png">
 <img width="1673" alt="image" src="https://user-images.githubusercontent.com/98197405/176843673-0fd2501f-4c3a-45e5-aa0c-63da5842774b.png">
<img width="1680" alt="image" src="https://user-images.githubusercontent.com/98197405/176843757-d88398da-f45e-4ee6-bec3-9270e683a12a.png">

<img width="1529" alt="image" src="https://user-images.githubusercontent.com/98197405/176758208-ddbd0dff-f829-4e50-b18b-7517d76b8ebe.png">
<img width="1574" alt="image" src="https://user-images.githubusercontent.com/98197405/176758483-6f35077b-8577-4ad6-9e74-7f2ff58bf715.png">
<img width="1555" alt="image" src="https://user-images.githubusercontent.com/98197405/176758539-6ce020bf-80a9-4cdf-bce8-fa330e836c76.png">
<img width="1561" alt="image" src="https://user-images.githubusercontent.com/98197405/176758571-6d22164d-de03-4cb0-ba0e-a344b511fce9.png">


## Iteration2 achievement  <br />

1.Front End: <br />
a.Create Commodity pag, Navigation bar, sign in page, register page, user profile page. These are all pages we plan for this projects.<br />
You will be able to see the Commodity page, and click link to see the details of each commodity. <br />
We will be working on delete function and update function. Project is moving as anticipated<br />
b.Set up most routes and links in all pages. Still need to update some routes. <br />
b.Implement Material UI in all pages and make sure the style in all pages are consistent. Plan to improve on design if have time<br />
2.Back End: <br />
a.Complete in implementing CRUD operation.<br />
Create implement API in GET and POST methods. Use Get to get user's profile info and supplies info that users post.<br />
Both home page, commodity page and user profile page will use GET method to get either suppies info and user info.<br />
Add supply button and Edit user info button will use Post method to add into database. <br />
3.Test in local file and deploy Front end and backend to heroku https://store-supply-website.herokuapp.com/. <br />
![1261655959834_ pic_hd](https://user-images.githubusercontent.com/98197405/175213027-e1a91c0e-1a1a-45e4-8538-744b4d9b820a.jpg)
![image](https://user-images.githubusercontent.com/98197405/174235772-b37f91cf-3622-43ff-9f48-ec3375b11900.png)

## Iteration1 achievement  <br />
1. We divided the project to two repo: Server and Client <br/>
2. Set up MongoDB and Express <br/>
3. Front end:  <br/>
we create Pages and components: currently we have 4 pages including a login page, a home page, a storage supply page and a registration page. <br/>
We set up the routing and link for each page <br/>
4. Server side:<br/>
We design and create MongoDB collections. We have mainly two collections: Commodies (products and supplies that will be displayed on webpage) and Users (Suppliers and customers that will use our services)
5. For CRUD, our back end enables CRUD operations. We will implement Create (Register users, and users will be able to create products and supplies), Add (Users add supplies), Delete (Users delete supplies), Edit (Users edit supplies in quantity and description). In iteration2 we will continue working on CRUD functions on home page and storage supply page.
6. Front end is deployed on Heroku https://store-supply-website.herokuapp.com/
![image](https://user-images.githubusercontent.com/98197405/174235772-b37f91cf-3622-43ff-9f48-ec3375b11900.png)
7. Future task contribution plan: <br/>
Front end:
UI design:Yan Wang
front end CRUD operation: Chenjie Bei
Back end: Interface and API design Yutong Shang


## Introduction <br/>
Store Supply Website
We are creating a Business-to-Business platform to assist companies selecting the right supplies to purchase. We help buyers and sellers find each other and co-operate efficiently. Customers will find great deals on new products and contact sellers directly. Our customers are small to mid-sized companies or individual buyers. Sellers can display and advertise their products on the platform, and leave their contact information. Some good examples of supplies include home improvement supplies, pet store supplies or restaurant supplies.

## Landing Page  <br />
Changes: Will add post and delete functions <br />
<img width="576" alt="image" src="https://user-images.githubusercontent.com/98197405/174212870-965011e3-7a93-4318-8621-9c031a0c9e24.png"> <br />

## Commodity page  <br />
<img width="546" alt="image" src="https://user-images.githubusercontent.com/98197405/174212922-e33aa261-ef68-457f-bb82-16fb1fa4d5d6.png">

## Profile page <br />
<img width="550" alt="image" src="https://user-images.githubusercontent.com/98197405/174212987-9471c16e-5205-4900-99f2-5f2cbb0ad4ba.png">



