import './BoardList.css';

const numList = [1, 2, 3, 4, 5];
const titleList = ['제목', '제목2', '제목3', '제목4', '제목5'];
const writerList = ['글쓴이1', '글쓴이2', '글쓴이3', '글쓴이4', '글쓴이5'];
const dateList = ['2023-02-08', '2023-02-08', '2023-02-08', '2023-02-08', '2023-02-08'];

function NumList() {
    const listItems = numList.map((number) =>
    <li key={number.toString()} className="boardLi">
        {number}
    </li>
    );
    return (
        <ul className="numList">{listItems}</ul>
    )
}

function TitleList() {
    const listItems = titleList.map((title) =>
        // if (title.length > 0) {
        //     title = title.slice(0) + '...';
        // }
        <li key={title} className="boardLi2">
            {title}
        </li>
    );
    return (
        <ul className="titleList">{listItems}</ul>
    )
}

function WriterList() {
    const listItems = writerList.map((writer) =>
    <li key={writer} className="boardLi3">
        {writer}
    </li>
    );
    return (
        <ul className="titleList">{listItems}</ul>
    )
}

function DateList() {
    const listItems = dateList.map((date) =>
    <li key={date} className="boardLi4">
        {date}
    </li>
    );
    return (
        <ul className="titleList">{listItems}</ul>
    )
}

function BoardList() {
  return (
    <div>
      <NumList/>
      <TitleList/>
      <WriterList/>
      <DateList/>
    </div>
  );
}

export default BoardList;
