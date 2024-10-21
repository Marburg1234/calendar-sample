class EventsController < ApplicationController
  def index
    @events = Event.all
    respond_to do |format|
      format.html
      format.json { render 'calendar' }
    end
  end

  def new
    @event = Event.new
  end

  def create
    @event = Event.new(event_params)
    @event.save
    redirect_to "/"
  end

  def list
    @events = Event.all
  end


  private

  def event_params
    params.require(:event).permit(:title, :start, :end)
  end

end
