// const txt=React.createElement('h1',{id:'txt'},'The World is urs..');
const root=ReactDOM.createRoot(document.getElementById('root'));
const parent =React.createElement('div',{id:"parent"},
    React.createElement('div',{id:"Child"},
        [React.createElement('h1',{},"Heyoo , am H1"),React.createElement('h2',{},"Heyyoo , am h2")]));
root.render(parent);