Rails.application.routes.draw do
  root to: "events#index"
  get '/events', to: 'events#index', defaults: { format: 'json' } #この行を追記

end
