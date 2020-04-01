const Query = {
  viewer(_parent: any, _args: any, _context: any, _info: any) {
    return { id: String(1), name: "John Smith", images: [] };
  }
  // me(){
  //   return {id: "", firstName:"", lastName: "", name: "", profileImageUri: "", followers: [{}], following: [], images: []}
  // }
  // helloWorld(){}
};

// const Mutation: Required<MutationResolvers> = {
//   register(_parent, _args, _context, _info) {
//     return { name: "" };
//   }
// };

export default { Query };
