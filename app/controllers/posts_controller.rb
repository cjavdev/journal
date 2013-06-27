
class PostsController < ApplicationController

  def index
    @posts = Post.all
    respond_to do |format|
      format.html { render :index }
      format.json { render :json => @posts}
    end
  end

  def create
    post = Post.new(params[:post])
    if post.save
      render :json => post
    else
      render :json => post.errors, :status => 422
    end
  end

  def destroy
    Post.delete(params[:id])
    render :json => true
  end

  def update
    post = Post.find(params[:id])
    post.update_attributes(params[:post])
    if post.save
      render :json => post
    else
      render :json => post.errors, :status => 422
    end
  end
end
