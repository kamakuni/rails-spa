# ListsController
class Api::V1::ListsController < ApplicationController
  before_action :authenticate_user!

  def index
    render json: List.where(user_id: session[:user_id])
  end

  def create
    list = List.create!(title: params[:title], user_id: session[:user_id])
    render json: list
  rescue ActiveRecord::RecordInvalid => e
    render status: 400, json: { message: e.message }
  end

  def show
    render json: { action: params[:id] }
  end

  def destory
    render json: { action: "destory" }
  end
end
