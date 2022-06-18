# ListsController
class Api::V1::ListsController < ApplicationController
  def index
    if session[:user_id]
      render json: List.where(user_id: session[:user_id])
    else
      render status: 401, json: { status: "ERROR" }
    end
  end

  def create
    list = List.new(title: params[:title], user_id: session[:user_id])
    if list.save!
      render json: { action: "create" }
    else
      render status: 500, json: { status: "ERROR" }
    end
  end

  def show
    render json: { action: params[:id] }
  end

  def destory
    render json: { action: "destory" }
  end
end
