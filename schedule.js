window.onload = function () {
  // 页面加载时初始化直播间和主播信息
  initializeRoomData();
  initializeAnchorData();
};

function saveDataToLocalStorage() {
  // 手动保存直播间和主播信息到localStorage
  saveRoomDataToLocalStorage();
  saveAnchorDataToLocalStorage();
  alert("信息已保存");
}

function initializeRoomData() {
  var savedRoomData = localStorage.getItem("roomData");
  console.log(savedRoomData);
  if (savedRoomData) {
    var roomData = JSON.parse(savedRoomData);

    // 移除原有的直播间
    var roomsDiv = document.getElementById("rooms");
    roomsDiv.innerHTML = "";

    // 添加存储的直播间信息
    roomData.forEach(function (room, index) {
      addRoom();
      var roomId = index + 1;

      // 填充直播间信息
      var roomDiv = roomsDiv.querySelector(`#room_${roomId}`);
      roomDiv.querySelector(`#roomName_${roomId}`).value = room.roomName;
      roomDiv.querySelector(`#roomStartTime_${roomId}`).value = room.startTime;
      roomDiv.querySelector(`#roomEndTime_${roomId}`).value = room.endTime;
    });
  }
}

function initializeAnchorData() {
  // 获取主播信息容器
  var anchorsDiv = document.getElementById("anchors");
  // 清空容器中的内容
  anchorsDiv.innerHTML = "";

  // 从 localStorage 中获取保存的主播信息数据
  var savedAnchors = JSON.parse(localStorage.getItem("anchorData")) || [];

  console.log(savedAnchors);

  // 如果存在保存的主播信息，则按照保存的信息初始化主播信息栏
  if (savedAnchors.length > 0) {
    savedAnchors.forEach((anchor) => {
      // 调用 addAnchor 方法，将保存的主播信息添加到页面上
      addAnchor();

      // 获取新创建的主播信息栏
      var newAnchorDiv = anchorsDiv.querySelector(`#anchor_${anchorCount - 1}`);

      // 设置新创建的主播信息栏的输入框和多选框的值
      newAnchorDiv.querySelector(`#anchorName_${anchorCount - 1}`).value = anchor.anchorName;
      newAnchorDiv.querySelector(`#preferredRoom_${anchorCount - 1}`).value = anchor.preferredRoom;
      newAnchorDiv.querySelector(`#preferredStartTime_${anchorCount - 1}`).value = anchor.preferredStartTime;
      newAnchorDiv.querySelector(`#preferredEndTime_${anchorCount - 1}`).value = anchor.preferredEndTime;

      // 设置休息日的复选框状态
      if (anchor.restDays) {
        for (let day = 0; day < anchor.restDays.length; day++) {
          const selected = anchor.restDays[day];
          newAnchorDiv.querySelector(`#restDay_${day}_${anchorCount - 1}`).checked = selected;
        }
      }
    });
  }
}

var roomCount = 1;
var anchorCount = 1;

function generateTimeOptions(idPrefix) {
  var optionsHTML = "";

  for (var hours = 0; hours < 24; hours++) {
    for (var minutes = 0; minutes < 60; minutes += 30) {
      var formattedHours = hours.toString().padStart(2, "0");
      var formattedMinutes = minutes.toString().padStart(2, "0");
      var timeValue = formattedHours + ":" + formattedMinutes;
      optionsHTML += `<option value="${timeValue}">${formattedHours}:${formattedMinutes}</option>`;
    }
  }

  return optionsHTML;
}

function addRoom() {
  var roomsDiv = document.getElementById("rooms");
  var newRoomDiv = document.createElement("div");
  var roomId = `${roomCount}`;

  newRoomDiv.classList.add("room");
  newRoomDiv.id = "room_" + roomId;
  newRoomDiv.innerHTML = `
            <label for="roomName_${roomId}">直播间名称:</label>
            <input type="text" id="roomName_${roomId}">

            <label for="roomStartTime_${roomId}">直播开始时间:</label>
            <select id="roomStartTime_${roomId}">
                ${generateTimeOptions(`roomStartTime_${roomId}`)}
            </select>

            <label for="roomEndTime_${roomId}">直播结束时间:</label>
            <select id="roomEndTime_${roomId}">
                ${generateTimeOptions(`roomEndTime_${roomId}`)}
            </select>

            <button onclick="deleteRoom(${roomId})">删除直播间</button>
        `;
  roomsDiv.appendChild(newRoomDiv);
  roomCount++;
}

function addAnchor() {
  var anchorsDiv = document.getElementById("anchors");
  var newAnchorDiv = document.createElement("div");
  var anchorId = `${anchorCount}`;

  newAnchorDiv.classList.add("anchor");
  newAnchorDiv.id = `anchor_${anchorId}`;
  newAnchorDiv.innerHTML = `
            <label for="anchorName_${anchorId}">主播名称:</label>
            <input type="text" id="anchorName_${anchorId}" value="">

            <label for="preferredRoom_${anchorId}">优先直播间:</label>
            <input type="text" id="preferredRoom_${anchorId}" value="">

            <label for="preferredStartTime_${anchorId}">优先开始时间:</label>
            <select id="preferredStartTime_${anchorId}">
                ${generateTimeOptions(`preferredStartTime_${anchorId}`)}
            </select>

            <label for="preferredEndTime_${anchorId}">优先结束时间:</label>
            <select id="preferredEndTime_${anchorId}">
                ${generateTimeOptions(`preferredEndTime_${anchorId}`)}
            </select>

            <div id="restDays_${anchorId}">休息日：
                <input type="checkbox" id="restDay_0_${anchorId}" value="Sunday">
                <label for="restDay_0_${anchorId}">星期日</label>
                <input type="checkbox" id="restDay_1_${anchorId}" value="Monday">
                <label for="restDay_1_${anchorId}">星期一</label>
                <input type="checkbox" id="restDay_2_${anchorId}" value="Tuesday">
                <label for="restDay_2_${anchorId}">星期二</label>
                <input type="checkbox" id="restDay_3_${anchorId}" value="Wednesday">
                <label for="restDay_3_${anchorId}">星期三</label>
                <input type="checkbox" id="restDay_4_${anchorId}" value="Thursday">
                <label for="restDay_4_${anchorId}">星期四</label>
                <input type="checkbox" id="restDay_5_${anchorId}" value="Friday">
                <label for="restDay_5_${anchorId}">星期五</label>
                <input type="checkbox" id="restDay_6_${anchorId}" value="Saturday">
                <label for="restDay_6_${anchorId}">星期六</label>
            </div>

            <button onclick="deleteAnchor(${anchorId})">删除主播</button>
        `;

  anchorsDiv.appendChild(newAnchorDiv);
  anchorCount++;
}

// 删除直播间
function deleteRoom(roomId) {
  var roomsDiv = document.getElementById("rooms");
  var roomDiv = roomsDiv.querySelector(`#room_${roomId}`);

  if (roomDiv) {
    roomsDiv.removeChild(roomDiv);
  }
}

// 删除主播
function deleteAnchor(anchorId) {
  var anchorsDiv = document.getElementById("anchors");
  var anchorDiv = anchorsDiv.querySelector(`#anchor_${anchorId}`);

  if (anchorDiv) {
    anchorsDiv.removeChild(anchorDiv);
    // 更新 localStorage 中的主播信息
  }
}

function sortByPreferredRoom(anchor1, anchor2) {
  if (anchor1.preferredRoom && !anchor2.preferredRoom) {
    return 1; // anchor1有preferredRoom，而anchor2没有，anchor1排在后面
  } else if (!anchor1.preferredRoom && anchor2.preferredRoom) {
    return -1; // anchor2有preferredRoom，而anchor1没有，anchor2排在前面
  } else {
    return 0; // anchor1和anchor2都有或都没有preferredRoom，保持原顺序
  }
}

function generateSchedule() {
  // 获取输入的信息
  var startDate = new Date(document.getElementById("startDate").value);
  var endDate = new Date(document.getElementById("endDate").value);

  var rooms = document.querySelectorAll("#rooms .room");
  var anchors = document.querySelectorAll("#anchors .anchor");

  var roomData = Array.from(rooms).map((room) => {
    var roomId = room.childNodes[3].id.split("_")[1];
    return {
      roomName: room.querySelector(`#roomName_${roomId}`).value,
      startTime: room.querySelector(`#roomStartTime_${roomId}`).value,
      endTime: room.querySelector(`#roomEndTime_${roomId}`).value,
    };
  });

  var anchorData = Array.from(anchors).map((anchor) => {
    var anchorId = anchor.childNodes[3].id.split("_")[1];
    var restDays = anchor.querySelector(`#restDays_${anchorId}`).querySelectorAll("input");
    var restDaysData = Array.from(restDays).map((restDay) => {
      //console.log(restDay);
      return restDay.checked;
    });
    var preferredStartTime = addOrSubtractHours(anchor.querySelector(`#preferredStartTime_${anchorId}`).value, 3, false);
    var preferredEndTime = addOrSubtractHours(anchor.querySelector(`#preferredEndTime_${anchorId}`).value, 3, false);
    return {
      anchorName: anchor.querySelector(`#anchorName_${anchorId}`).value,
      preferredRoom: anchor.querySelector(`#preferredRoom_${anchorId}`).value,
      preferredStartTime: preferredStartTime,
      preferredEndTime: preferredEndTime,
      restDays: restDays,
      scheduledDays: {},
    };
  });

  anchorData.sort(sortByPreferredRoom);

  // 生成排班表格
  var scheduleTable = generateScheduleTable(startDate, endDate, roomData, anchorData);

  // 显示生成的排班表格
  document.getElementById("scheduleTable").innerHTML = scheduleTable;
}

function generateScheduleTable(startDate, endDate, roomData, anchorData) {
  // 生成排班数据数组
  var scheduleData = generateScheduleData(startDate, endDate, roomData, anchorData);

  // 获取所有直播间
  var rooms = Array.from(new Set(scheduleData.map((item) => item.room)));

  var allTables = "";

  // 遍历每个直播间生成表格
  rooms.forEach((room) => {
    var scheduleTable = "<table><tr><th>日期</th>";
    var roomScheduleData = scheduleData.filter((item) => item.room === room);

    // 获取所有时间段
    var timeSlots = Array.from(new Set(roomScheduleData.map((item) => item.timeSlot)));

    // 生成表头
    for (var j = 0; j < timeSlots.length; j++) {
      scheduleTable += `<th>${addOrSubtractTimeRange(timeSlots[j], 3, true)}</th>`;
    }
    scheduleTable += "</tr>";

    // 生成表格内容
    for (var i = 0; i < roomScheduleData.length; i++) {
      var scheduleItem = roomScheduleData[i];
      var formattedDate = formatDateToString(scheduleItem.date);

      // 如果是新的一天，生成新行
      if (i === 0 || scheduleItem.date > roomScheduleData[i - 1].date) {
        scheduleTable += `<tr><td>${formattedDate}</td>`;
      }

      // 添加主播安排
      scheduleTable += `<td>${scheduleItem.anchor}</td>`;

      // 如果是最后一行或下一行是新的一天，结束当前行
      if (i === roomScheduleData.length - 1 || scheduleItem.date < roomScheduleData[i + 1].date) {
        scheduleTable += "</tr>";
      }
    }

    scheduleTable += "</table>";
    allTables += `<h3>${room}排班表</h3>` + scheduleTable;
  });

  return allTables;
}

function generateScheduleData(startDate, endDate, roomData, anchorData) {
  var scheduleData = [];
  var currentDate = new Date(startDate);

  while (currentDate <= endDate) {
    for (var i = 0; i < roomData.length; i++) {
      var room = roomData[i];
      var roomName = room.roomName;
      var startTime = addOrSubtractHours(room.startTime, 3, false);
      var endTime = addOrSubtractHours(room.endTime, 3, false);
      var timeSlots = generateTimeSlots(currentDate, startTime, endTime, 3);

      for (var j = 0; j < timeSlots.length; j++) {
        var timeSlot = timeSlots[j];
        var scheduleItem = {
          date: new Date(currentDate),
          anchor: "",
          room: roomName,
          timeSlot: timeSlot,
        };

        scheduleData.push(scheduleItem);
      }
    }

    currentDate.setDate(currentDate.getDate() + 1);
  }

  generateAnchorData(scheduleData, scheduleItem, anchorData);
  return scheduleData;
}

function generateAnchorData(scheduleData, scheduleItem, anchorData) {
  for (let index = 0; index < scheduleData.length; index++) {
    const scheduleItem = scheduleData[index];
    if (scheduleData[index].anchor) continue;
    var availableAnchor = findAvailableAnchor_RuleOne(scheduleItem, anchorData);
    if (availableAnchor) scheduleData[index].anchor = availableAnchor;
  }

  for (let index = 0; index < scheduleData.length; index++) {
    const scheduleItem = scheduleData[index];
    if (scheduleData[index].anchor) continue;
    var availableAnchor = findAvailableAnchor_RuleTwo(scheduleItem, anchorData);
    if (availableAnchor) scheduleData[index].anchor = availableAnchor;
  }

  for (let index = 0; index < scheduleData.length; index++) {
    const scheduleItem = scheduleData[index];
    if (scheduleData[index].anchor) continue;
    var availableAnchor = findAvailableAnchor_RuleThree(scheduleItem, anchorData);
    if (availableAnchor) scheduleData[index].anchor = availableAnchor;
  }

  for (let index = 0; index < scheduleData.length; index++) {
    const scheduleItem = scheduleData[index];
    if (scheduleData[index].anchor) continue;
    var availableAnchor = findAvailableAnchor_RuleFour(scheduleItem, anchorData);
    if (availableAnchor) scheduleData[index].anchor = availableAnchor;
  }

  for (let index = 0; index < scheduleData.length; index++) {
    const scheduleItem = scheduleData[index];
    if (scheduleData[index].anchor) continue;
    var availableAnchor = findAvailableAnchor_RuleFive(scheduleItem, anchorData);
    if (availableAnchor) scheduleData[index].anchor = availableAnchor;
  }
}

function findAvailableAnchor_RuleOne(scheduleItem, anchorData) {
  const { date, room, timeSlot } = scheduleItem;

  // 遍历主播数据，找到适合当前时间段和直播间的主播
  // 优先级1: 满足优选直播间，且满足优选直播时段
  for (var k = 0; k < anchorData.length; k++) {
    var anchor = anchorData[k];
    if (isAnchorAvailableStrong(scheduleItem, anchor)) {
      if (isAnchorPreferredRoomAvailable(scheduleItem, anchor) && isAnchorPreferredTimeAvailable(scheduleItem, anchor)) {
        // 更新主播的安排信息
        updateAnchorSchedule(anchor, date, timeSlot);
        return anchor.anchorName;
      }
    }
  }
}

function findAvailableAnchor_RuleTwo(scheduleItem, anchorData) {
  const { date, room, timeSlot } = scheduleItem;

  // 遍历主播数据，找到适合当前时间段和直播间的主播
  // 优先级2: 满足优选直播间，但不是优选直播时段
  for (var k = 0; k < anchorData.length; k++) {
    var anchor = anchorData[k];
    if (isAnchorAvailableStrong(scheduleItem, anchor)) {
      if (isAnchorPreferredRoomAvailable(scheduleItem, anchor) && !isAnchorPreferredTimeAvailable(scheduleItem, anchor)) {
        // 更新主播的安排信息
        updateAnchorSchedule(anchor, date, timeSlot);
        return anchor.anchorName;
      }
    }
  }
}

function findAvailableAnchor_RuleThree(scheduleItem, anchorData) {
  const { date, room, timeSlot } = scheduleItem;
  // 遍历主播数据，找到适合当前时间段和直播间的主播
  // 优先级3: 无优选直播间，但满足优选直播时段
  for (var k = 0; k < anchorData.length; k++) {
    var anchor = anchorData[k];
    if (isAnchorAvailableStrong(scheduleItem, anchor)) {
      if (anchor.preferredRoom == "" && isAnchorPreferredTimeAvailable(scheduleItem, anchor)) {
        // 更新主播的安排信息
        updateAnchorSchedule(anchor, date, timeSlot);
        return anchor.anchorName;
      }
    }
  }
}

function findAvailableAnchor_RuleFour(scheduleItem, anchorData) {
  const { date, room, timeSlot } = scheduleItem;
  // 遍历主播数据，找到适合当前时间段和直播间的主播
  // 优先级4: 不是优选直播间，且不是优选直播时段
  for (var k = 0; k < anchorData.length; k++) {
    var anchor = anchorData[k];
    if (isAnchorAvailableStrong(scheduleItem, anchor)) {
      if (!isAnchorPreferredRoomAvailable(scheduleItem, anchor) && !isAnchorPreferredTimeAvailable(scheduleItem, anchor)) {
        // 更新主播的安排信息
        updateAnchorSchedule(anchor, date, timeSlot);
        return anchor.anchorName;
      }
    }
  }
}

function findAvailableAnchor_RuleFive(scheduleItem, anchorData) {
  const { date, room, timeSlot } = scheduleItem;
  // 遍历主播数据，找到适合当前时间段和直播间的主播
  // 优先级5: 任意可用主播
  for (var k = 0; k < anchorData.length; k++) {
    var anchor = anchorData[k];
    if (isAnchorAvailableStrong(scheduleItem, anchor)) {
      updateAnchorSchedule(anchor, date, timeSlot);
      return anchor.anchorName;
    }
  }
}

function isRestDay(scheduleItem, anchor) {
  return Boolean(anchor.restDays[scheduleItem.date.getDay()].checked);
}

function isAnchorAvailableStrong(scheduleItem, anchor) {
  var date = formatDateToString(scheduleItem.date);
  //休息日必须休息
  if (isRestDay(scheduleItem, anchor)) {
    return false;
  }
  //当天如果已经排了2次班，则不再进行排班
  //如果有时间相邻的排班，则不进行排班
  if (anchor.scheduledDays[date]) {
    if (anchor.scheduledDays[date].length >= 2) {
      return false;
    }
    for (let index = 0; index < anchor.scheduledDays[date].length; index++) {
      const timeSlot1 = anchor.scheduledDays[date][index];
      const timeSlot2 = scheduleItem.timeSlot;
      if (areTimeSlotsOverlapping(timeSlot1, timeSlot2)) {
        return false;
      }
    }
  }
  return true;
}

function isAnchorPreferredRoomAvailable(scheduleItem, anchor) {
  //是否满足主播的优先直播间条件
  if (anchor.preferredRoom !== scheduleItem.room) {
    return false;
  }
  return true;
}

function isAnchorPreferredTimeAvailable(scheduleItem, anchor) {
  //是否满足主播的优先时间段
  var preferredStartTime = anchor.preferredStartTime;
  var preferredEndTime = anchor.preferredEndTime;
  const timeSlot1 = preferredStartTime + " - " + preferredEndTime;
  const timeSlot2 = scheduleItem.timeSlot;
  if (areTimeSlotsOverlappingStrict(timeSlot1, timeSlot2)) {
    return true;
  }

  return false;
}

function isAnchorAvailable(scheduleItem, anchor, force) {
  var date = formatDateToString(scheduleItem.date);

  // 主播优先直播间不是当前直播间，则不优先选择
  if (force == 1 && anchor.preferredRoom !== scheduleItem.room) {
    return false;
  } else if (force == 2 && anchor.preferredRoom != "") {
    return false;
  }

  // 如果是周末且主播选择周末休息，则不选择
  if (isRestDay(scheduleItem, anchor)) {
    return false;
  }

  // 如果已安排的日期中有这一天，并且这个时间段的前后都有安排主播，则不选择
  if (anchor.scheduledDays[date]) {
    if (anchor.scheduledDays[date].length >= 2) {
      return false;
    }
    for (let index = 0; index < anchor.scheduledDays[date].length; index++) {
      const timeSlot1 = anchor.scheduledDays[date][index];
      const timeSlot2 = scheduleItem.timeSlot;
      if (areTimeSlotsOverlapping(timeSlot1, timeSlot2)) {
        return false;
      }
    }
  }
  return true;
}

function areTimeSlotsOverlapping(timeSlot1, timeSlot2) {
  var [start1, end1] = timeSlot1.split(" - ");
  var [start2, end2] = timeSlot2.split(" - ");

  var start1Time = new Date("2000-01-01 " + start1);
  var end1Time = new Date("2000-01-01 " + end1);
  var start2Time = new Date("2000-01-01 " + start2);
  var end2Time = new Date("2000-01-01 " + end2);

  // 检查两个时间段是否存在重叠
  return (start1Time <= start2Time && start2Time <= end1Time) || (start2Time <= start1Time && start1Time <= end2Time);
}

function parseTimeRange(timeRange) {
  const [startStr, endStr] = timeRange.split(" - ");
  const [startHour, startMinute] = startStr.split(":").map(Number);
  const [endHour, endMinute] = endStr.split(":").map(Number);

  return {
    start: startHour * 60 + startMinute,
    end: endHour * 60 + endMinute,
  };
}

function areTimeRangesOverlapping(timeSlot1, timeSlot2) {
  let range1 = parseTimeRange(timeSlot1);
  let range2 = parseTimeRange(timeSlot2);
  return range1.start < range2.end && range1.end > range2.start;
}

function areTimeSlotsOverlappingStrict(timeSlot1, timeSlot2) {
  const [start1, end1] = timeSlot1.split(" - ");
  const [start2, end2] = timeSlot2.split(" - ");

  const start1Time = new Date("2000-01-01 " + start1);
  const end1Time = new Date("2000-01-01 " + end1);
  const start2Time = new Date("2000-01-01 " + start2);
  const end2Time = new Date("2000-01-01 " + end2);

  // 检查两个时间段是否存在重叠
  return (
    (start1Time < start2Time && start2Time < end1Time) || // 时间段2的开始时间在时间段1内
    (start1Time < end2Time && end2Time < end1Time) || // 时间段2的结束时间在时间段1内
    (start2Time < start1Time && start1Time < end2Time) || // 时间段1的开始时间在时间段2内
    (start2Time < end1Time && end1Time < end2Time) || // 时间段1的结束时间在时间段2内
    start1Time.getTime() === start2Time.getTime() || // 考虑起始时间瞬时重合
    end1Time.getTime() === end2Time.getTime() // 考虑结束时间瞬时重合
  );
}

function updateAnchorSchedule(anchor, date, timeSlot) {
  // 更新主播的安排信息
  anchor.scheduledDays[formatDateToString(date)] = anchor.scheduledDays[formatDateToString(date)] || [];
  anchor.scheduledDays[formatDateToString(date)].push(timeSlot);
}

// 获取前一个时间段
function getPreviousTimeSlot(timeSlot) {
  // 根据实际情况获取前一个时间段的逻辑
  // 这里只是个示例，需要根据实际需求修改
  return "";
}

function padTwoDigits(number) {
  return (number < 10 ? "0" : "") + number;
}

function generateTimeSlots(date, startTime, endTime, duration) {
  var timeSlots = [];
  var currentDate = new Date(date);
  var startDateTime = new Date(date.getFullYear() + "/" + padTwoDigits(date.getMonth() + 1) + "/" + padTwoDigits(date.getDate()) + " " + startTime + ":00");
  var endDateTime = new Date(date.getFullYear() + "/" + padTwoDigits(date.getMonth() + 1) + "/" + padTwoDigits(date.getDate()) + " " + endTime + ":00");

  while (startDateTime < endDateTime) {
    var tempEndTime = new Date(startDateTime);
    tempEndTime.setHours(tempEndTime.getHours() + duration);

    if (tempEndTime > endDateTime) {
      tempEndTime = endDateTime;
    }

    var timeSlotString = getTimeSlotString(startDateTime, tempEndTime);
    timeSlots.push(timeSlotString);

    startDateTime.setHours(startDateTime.getHours() + duration);
  }

  return timeSlots;
}

function formatDate(date) {
  var options = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    weekday: "long",
  };
  return date.toLocaleDateString("en-US", options);
}

function formatDateToString(date) {
  var year = date.getFullYear();
  var month = (date.getMonth() + 1).toString().padStart(2, "0");
  var day = date.getDate().toString().padStart(2, "0");

  return `${year}-${month}-${day}`;
}

function getTimeSlotString(startTime, endTime) {
  var options = { hour: "numeric", minute: "numeric" };
  var startString = startTime.toLocaleTimeString("zh-CN", options);
  var endString = endTime.toLocaleTimeString("zh-CN", options);
  return startString + " - " + endString;
}

function exportToExcel() {
  var scheduleTable = document.getElementById("scheduleTable");
  if (!scheduleTable) {
    generateSchedule();
  }
  var headsAndTables = scheduleTable.childNodes;
  var wb = XLSX.utils.book_new();
  for (let i = 0; i < headsAndTables.length; i = i + 2) {
    const head = headsAndTables[i];
    const table = headsAndTables[i + 1];
    exportToSheet(wb, head.innerText, table);
  }
  // 导出 Excel 文件
  XLSX.writeFile(wb, "schedule.xlsx");
}

function exportToSheet(wb, sheetName, scheduleTable) {
  var tableData = [];
  var rows = scheduleTable.getElementsByTagName("tr");
  for (var i = 0; i < rows.length; i++) {
    var rowData = [];
    var cells = rows[i].getElementsByTagName("td");
    cells = cells.length === 0 ? rows[i].getElementsByTagName("th") : cells;
    for (var j = 0; j < cells.length; j++) {
      rowData.push(cells[j].innerText);
    }
    tableData.push(rowData);
  }
  var ws = XLSX.utils.aoa_to_sheet(tableData);
  XLSX.utils.book_append_sheet(wb, ws, sheetName);
}

function saveRoomDataToLocalStorage() {
  var rooms = document.querySelectorAll("#rooms .room");
  var roomData = [];

  rooms.forEach(function (room, index) {
    var roomId = index + 1;
    var roomInfo = {
      roomName: room.querySelector(`#roomName_${roomId}`).value,
      startTime: room.querySelector(`#roomStartTime_${roomId}`).value,
      endTime: room.querySelector(`#roomEndTime_${roomId}`).value,
    };
    roomData.push(roomInfo);
  });

  localStorage.setItem("roomData", JSON.stringify(roomData));
}

function saveAnchorDataToLocalStorage() {
  var anchors = document.querySelectorAll("#anchors .anchor");
  var anchorData = [];

  anchors.forEach(function (anchor, index) {
    var anchorId = index + 1;
    var restDays = anchor.querySelector(`#restDays_${anchorId}`).querySelectorAll("input");
    var restDaysData = Array.from(restDays).map((restDay) => {
      //console.log(restDay);
      return restDay.checked;
    });
    var anchorInfo = {
      anchorName: anchor.querySelector(`#anchorName_${anchorId}`).value,
      preferredRoom: anchor.querySelector(`#preferredRoom_${anchorId}`).value,
      preferredStartTime: anchor.querySelector(`#preferredStartTime_${anchorId}`).value,
      preferredEndTime: anchor.querySelector(`#preferredEndTime_${anchorId}`).value,
      restDays: restDaysData,
    };
    anchorData.push(anchorInfo);
  });

  localStorage.setItem("anchorData", JSON.stringify(anchorData));
}

function addOrSubtractTimeRange(timeRange, hoursToAddOrSubtract, isAddition = true) {
  const [start, end] = timeRange.split(" - ");

  // 对开始时间进行加减操作
  const newStart = addOrSubtractHours(start, hoursToAddOrSubtract, isAddition);

  // 对结束时间进行加减操作
  const newEnd = addOrSubtractHours(end, hoursToAddOrSubtract, isAddition);

  // 返回新的时间段字符串
  return `${newStart} - ${newEnd}`;
}

function addOrSubtractHours(timeString, hoursToAddOrSubtract, isAddition = true) {
  // 解析时间字符串，转换为分钟表示
  const [hour, minute] = timeString.split(":").map(Number);
  let totalMinutes = hour * 60 + minute;
  // 根据操作类型进行加减
  totalMinutes = isAddition ? (totalMinutes + hoursToAddOrSubtract * 60) % (24 * 60) : (totalMinutes - hoursToAddOrSubtract * 60 + 24 * 60) % (24 * 60);
  // 计算新的小时和分钟
  const newHour = Math.floor(totalMinutes / 60);
  const newMinute = totalMinutes % 60;
  // 格式化为字符串，确保时和分都是两位数
  const formattedTime = `${String(newHour).padStart(2, "0")}:${String(newMinute).padStart(2, "0")}`;
  return formattedTime;
}