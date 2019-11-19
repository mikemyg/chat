const url = "";
const headers = {
  "Content-Type": "application/json"
};

export const login = async id => {
  let result = await fetch(url + `/user/${id}`, {
    method: "GET",
    headers: headers
  })
    .then(response => response.json())
    .then(responseJson => {
      return responseJson;
    })
    .catch(error => {
      return false;
    });

  return result;
};

export const getUsers = async () => {
  let result = await fetch(url + `/users`, {
    method: "GET",
    headers: headers
  })
    .then(response => response.json())
    .then(responseJson => {
      return responseJson;
    })
    .catch(error => {
      console.log(error);
    });

  return result;
};

export const createPersonalConversation = async data => {
  let result = await fetch(url + `/conversation/personal `, {
    method: "Post",
    headers: headers,
    body: JSON.stringify(data)
  })
    .then(response => response.json())
    .then(responseJson => {
      return responseJson;
    })
    .catch(error => {
      console.log(error);
    });

  return result;
};

export const sendMessage = async (id, data) => {
  let result = await fetch(url + `/conversation/${id}/message/send`, {
    method: "Post",
    headers: headers,
    body: JSON.stringify(data)
  })
    .then(response => response.json())
    .then(responseJson => {
      return responseJson;
    })
    .catch(error => {
      console.log(error);
    });

  return result;
};

export const getNewMessagesFromConversation = async (
  conversationid,
  messageId
) => {
  let result = await fetch(
    url + `/conversation/${conversationid}/new/${messageId}`,
    {
      method: "GET",
      headers: headers
    }
  )
    .then(response => response.json())
    .then(responseJson => {
      return responseJson;
    })
    .catch(error => {
      console.log(error);
    });

  return result;
};
