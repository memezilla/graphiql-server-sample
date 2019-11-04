const resolvers = {
  Query: {
    reservations: async (root: any, { sort }: any, context: any) => {
      return await context.Reservations.find({})
        .sort(
          sort
            ? {
                [sort.field]: sort.direction
              }
            : {}
        )
        .exec();
    },
    reservation: async (root: any, { id }: any, context: any) => {
      return await context.Reservations.findOne({ _id: id }).exec();
    }
  },
  Mutation: {
    reservationSave: async (root: any, { reservation }: any, context: any) => {
      const newReservation = new context.reservations(reservation);
      return await newReservation.save();
    },
    reservationRemove: async (root: any, { id }: any, context: any) => {
      return await context.reservations.findByIdAndDelete(id).exec();
    }
  }
};

export default resolvers;
