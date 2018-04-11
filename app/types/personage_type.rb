PersonageType = GraphQL::ObjectType.define do
  name "Personage"
  field :id, types.ID
  field :name, types.String
  field :weight, types.Int
  field :height, types.Int
  field :image, types.String
  field :types, types.String
  # field :actors do
  #   type types[ActorType]
  #   argument :size, types.Int, default_value: 10
  #   resolve -> (movie, args, ctx) {
  #     movie.actors.limit(args[:size])
  #   }
  # end
end