class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  def query
    render json: Personage.where(id: personage_range)
  end

  private

  def personage_range
    started_id = params[:last_id].to_i
    ended_id = started_id + 5
    started_id..ended_id
  end
end
