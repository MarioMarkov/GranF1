const articlesReducer = (articles, action) => {
  switch (action.type) {
    case "added": {
      return [
        ...articles,
        {
          en_title: action.en_title,
          bg_title: action.bg_title,
          en_content: action.en_content,
          bg_content: action.bg_content,
          image_url: action.image_url,
          race_review: action.race_review,
        },
      ];
    }
    case "changed": {
      return articles.map((a) => {
        if (a._id === action.article._id) {
          return action.article;
        } else {
          return a;
        }
      });
    }
    case "deleted": {
      return articles.filter((a) => a.id !== action.id);
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
};

export default articlesReducer;
