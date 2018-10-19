const myGroups = []; // массив для хранения подписок на группы

const groupList = [
  { groupName: 'Habrahabr', subs:0},
  { groupName: 'Web2018', subs:0},
];

/**
 * Функция подписки на группы
 * @param group
 */
function subscribeGroup(group) {
  // todo
  for (let key of groupList.values()){
    if (key.groupName == group && myGroups.indexOf(group)==-1){
      key.subs=1; 
      myGroups.push(group);
      console.log("now subscribed" + group);
      return 0;
    }
  }
  console.log("subscribed doesn't exist" + group);
}

/**
 * Функция отписки от группы
 * @param group
 */
function unsubscribeGroup(group) {
  // todo
  if (myGroups.indexOf(group) != 1){
    for (let key of groupList.values()){
      if (group==key.groupName){
        key.subs=0;
      }
    }
    myGroups.splice(myGroups.indexOf(group), 1);
    console.log("now unsubscribed" + group);
  } else
    console.log("unsubscribed doesn't exists" + group);
}

function test_() {
  console.log("\nfunction subscribeGroup(" + "Habrahabr" + ")");
  console.log(subscribeGroup("Habrahabr"));
  console.log("\nfunction subscribeGroup(" + "Web2018" + ")");
  console.log(subscribeGroup("Web2018"));
  console.log("\nfunction subscribeGroup(" + "AC/DC" + ")");
  console.log(subscribeGroup("AC/DC"));
  console.log("\nfunction subscribeGroup(" + "AC/DC" + ")");
  console.log(subscribeGroup("AC/DC"));

  console.log("\nfunction unsubscribeGroup(" + "Web2018" + ")");
  console.log(unsubscribeGroup("Web2018"));
  console.log(myGroups);
  console.log("\nfunction unsubscribeGroup(" + "Habrahabr" + ")");
  console.log(unsubscribeGroup("Habrahabr"));
  console.log(myGroups);
}