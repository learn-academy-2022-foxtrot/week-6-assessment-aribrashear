# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1)
# This file is our controller class for BlogPosts, which is a child class of ApplicationController. Within this file, we can define the methods which will belong to the class BlogPosts.
class BlogPostsController < ApplicationController
  def index
    # ---2)
    # Here, we're creating an instance variable that will hold the action we want to perform inside of the method.
    # BlogPost.all will return all instances of BlogPost. 
    # We're storing this action to a variable so that we can easily access it, especially inside of a view. 
    # For example, you could actually iterate through the variable @posts inside of a view using .each to display the information from each instance.
    @posts = BlogPost.all
  end

  # ---3)
  # Show is a controller method that will return a single instance of a given model. It will do this by using .find and passing in a parameter of [:id]. 
  # Using params like this works by grabbing the data from the url, which will have a route that looks something like: blogs/:id.
  # If your url looked like: localhost:3000/blogs/2 - it would show the instance which has an id of 2. So, your actual method would look like this after the params have been passed in: BlogPost.find(2)
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4)
  # New is a controller method which connects to a view of a form, which a user can then use to create a new instance within the DB. 
  # If you were to use the command Blogpost.new inside of the rails console, it would create a new instance with all nil values. So, when we're using it inside of the view, it's populating an empty instance but NOT submitting it. That functionality is handled within the create method, as we can see below.
  def new
    @post = BlogPost.new
  end

  def create
    # ---5)
    # Here, we're storing the ability to create a post to the variable @post. When we reference blog_post_params inside of the parenthesis, it's actually calling a method which we've created below that will verify that the information being submitted matches the data we are expecting to receive. It's a placeholder for the data we're going to pass in when the controller method 'new' is submitted.
    # So, what it'll actually look like upon submission will be something like this: Blogpost.create(title: 'title', content: 'content')
    # Then, we're using a conditional to check if the post was created successfully. If it was, the method will automatically redirect the user to the url that corresponds to blog_post.
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def edit
    # ---6)
    # This action is actually the same as the one we created for our show method, but the difference is going to be inside of the view. Edit is going to display a form that will be populated with the contents of BlogPost.find, which the user will be able to then make changes to. 
    # The action itself works the same way as it does for show, by passing in the id of the instance through the url, then displaying the instance with a matching id.
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7)
    # Here, we're accessing the data that's stored inside of @post, which will be the instance that corresponds to the id obtained from the url with params.
    # Then, we're actually performing a patch request by calling the method, then validating the information being passed in with the method blog_post_params. The information being submitted here will be coming from the user's input in the view, which is coming from edit.
    # We're then using a conditional to check if the instance was valid, and if it was, we're going to redirect the user to the url that corresponds to blog_post. (NOTE: It's convention to add _path to the end of these routes, but in the actual routes file, the path will be blog_post.)
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      # ---8)
      # redirect_to is a method which redirects the user to the url that corresponds with blog_posts. Most likely, this will be the index (or home page, which displays all current posts), but in order to confirm this, I would need to check the routes file. There, I could look at the as:, and confirm where this path is leading.
      redirect_to blog_posts_path
    end
  end

  # ---9)
  # Private is a keyword in ruby which will restrict the scope from which a method is able to be called. It is used to implement strong params, which ultimately set restrictions on controller methods and will only allow for the data that WE specify as developers to be entered into our database.
  # So, essentially, everything below this keyword wil ONLY be able to be accessed when it's called from inside of a specific method, and users won't be able to pass extra information into our database that we have not allowed for.
  private
  def blog_post_params
    # ---10)
    # Strong params have two different parts, which are .require and .permit. Require accepts one argument, which will be the name of the file. This can be in the form of a path, as it is in our example (:blog_post). So, with this in mind, it will require the methods being called to exist within that file. Permit specifies the attributes that we are allowing to be passed in, and will allow ONLY those attributes to be submitted.
    params.require(:blog_post).permit(:title, :content)
  end
end
