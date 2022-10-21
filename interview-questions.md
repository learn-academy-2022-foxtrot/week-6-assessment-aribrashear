# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

Your answer: Although you should do your best to plan out your model ahead of time to avoid errors like this, you could add a column into your Student model using a migration. In order to do this, you would use the command:
rails g migration name_of_migration.
Then, inside of your rails app, you would navigate to the file called migrations, and access the newly generated instance (this instance will be a unique collection of numbers, but it should be the most recent one in the files). From there, you can make whatever change is necessary - in our case, this would be adding the column which contains the foreign key. So, we could use:
add_column: cohort_id
We're naming it cohort_id because we're trying to associate Student to Cohort, which has_many students. As part of rails magic, using the syntax model_id will automatically link that model to the foreign key.

Researched answer: In addition to my previous answer, one of the really important reasons to use migrations instead of editing the schema manually is that it will essentially store a version of your code (similar to how you use github) that can be rolled back (as long as you aren't performing a delete action that cannot be undone), or even just referred to in order to see a history of what has been done to your code.

2. Which RESTful routes must always be passed params? Why?

Your answer: The RESTful routes which must always be passed params are:
Show - Requires params[:id] in order to display the correct instance from the DB.
Edit - Requires params[:id], but will also need additional data that's going to be passed in through strong params in order to access the content from the instance in the DB in order to display this information in the view for the user to edit.
Update - Requires params[:id] in order to update the correct instance from the DB.
Destroy - Requires params[:id] in order to delete the correct instance from the DB.

As for the routes that DO NOT need to be passed params:
Index - Will use Model.all to display all instances from the DB. It doesn't need any specific ID, because its job is to display ALL instances. Show would be the route to display a single instance.
New - Will use Model.new to display a blank form that a user can fill out in order to create a new instance in the database. Even though the instance being generated will produce a unique ID, we don't need to access that ID in order to create it - nor would we be able to until after it exists in the DB.
Create - Will use Model.create(strong_params) in order to create a new instance in the DB. As with New, we don't need to access the ID of the new instance in order to create it.

Researched answer: It's good to keep in mind that when your app receives an incoming request, it's going to read your routes from top to bottom to find the first match of that type of request to the route, so you need to make sure they're ordered in a way that won't cause it to return an unintended action before you meant to.

3. Name three rails generator commands. What is created by each?

Your answer: Three rails generator commands include:
rails g model - Creates a new model, which will accept key:value pairs of a name and a data type. This is essentially initializing the schema for an empty table, which we will then populate with our data.

rails g migration - Generates a new instance of a migration, which we can use to create, edit, and destroy parts of our model.

rails g resource - Generates a new resource, which is similar to a model.

Researched answer: In addition to my previous response, the primary difference between a model and a resource is what folders they create when you initialize them. A model will create a migration, a model in app/models, and some tests. A resource will create a migration, a model in app/models, a controller, routes, and tests. So, a model could be useful for when you want more flexibility and customization with your app, but a resource will give you more resources on initialization so that you can hit the ground running.

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET" location: /students -> index

```ruby
def index
  @students = Student.all
end
```

action: "POST" location: /students -> create

```ruby
def create
  @student = Student.create(strong_params)
end
```

action: "GET" location: /students/new -> new

```ruby
def new
  @student = Student.new
end
```

action: "GET" location: /students/2 -> show

```ruby
def show
  @student = Student.find(params[:id])
end
```

action: "GET" location: /students/2/edit -> edit

```ruby
def edit
  @student = Student.find(params[:id])
end
```

action: "PATCH" location: /students/2 -> update

```ruby
def update
  @student = Student.find(params[:id])
  @student.update(strong_params)
end
```

action: "DELETE" location: /students/2 -> delete

```ruby
def delete
  @student = Student.find(params[:id]).destroy
end
```

5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

1. As a user, I can see a webpage with a header that says 'To Do List', and a button that says 'Add Task'.
1. As a user, I can click on 'Add Task' and see a page with an empty form that has two input boxes, which both have a heading above them: 'Task Name' and 'Task Description'.
1. As a user, I can add text to the empty form, click the button that says 'Add Task', and see a list of all my tasks and their descriptions.
1. As a user, I can click on the task name and be taken to a page which will show me the task I clicked on, and three buttons that say 'Edit Task', 'Complete Task', and 'Back to List'.
1. As a user, if I click on 'Edit Task', I will see an input box containing my task and a button that says 'Confirm Changes'.
1. As a user, I can change the text inside of my task.
1. As a user, I can click on the button that says 'Confirm Changes', and see a page that displays my updated task.
1. As a user, I can click on 'Complete Task' and see a pop-up telling me: 'Completing this task will remove it from your list. Are you sure you want to complete it?', and two buttons underneath the text that say 'Okay' and 'Cancel'.
1. As a user, I can click on 'Okay', and see a list of all my updated tasks, with the selected task removed. I can also click on 'Cancel' and see my current task, not deleted.
1. As a user, I can click 'Back to List' and see a list of all my tasks, and a button that says 'Add Task'.
