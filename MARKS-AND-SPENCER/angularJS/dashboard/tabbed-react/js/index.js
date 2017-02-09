
var Tab = React.createClass({
    handleClick: function(e){
        e.preventDefault();
    	this.props.handleClick();
    },
    
    render: function(){
        return (
            <li className={this.props.isCurrent ? 'current' : null}>
            	<a onClick={this.handleClick} href={this.props.url}>
            		{this.props.name}
	            </a>
            </li>
        );
    }
});

var Tabs = React.createClass({
    handleClick: function(tab){
    	this.props.changeTab(tab);
    },
    
    render: function(){
        return (
            <nav>
                <ul>
                {this.props.tabList.map(function(tab, index) {
                    return (
                        <Tab
                            handleClick={this.handleClick.bind(this, index)}
                            key={tab.id}
                            url={tab.url}
                            name={tab.name}
                            isCurrent={(this.props.currentTab === index)}
                         />
                    );
                }.bind(this))}
                </ul>
            </nav>
        );
    }
});

var App = React.createClass({
	getInitialState: function () {        
        return {
            tabList: tabList,
            currentTab: 0
        };
    },

    changeTab: function(index) {
        this.setState({ currentTab: index });
    },

    render: function(){
        return(
            <div>
                <Tabs
            		currentTab={this.state.currentTab}
            		tabList={this.state.tabList}
            		changeTab={this.changeTab}
            	/>
            	<div className="content">
            		{this.state.tabList[this.state.currentTab].content}
            	</div>
            </div>
        );
    }
});

var tabList = [
    {
        'name': 'Mike',
        'url': '/mike',
        'content':
            <div className="mike">
            	<img src="http://s.mlkshk.com/r/104TN" />
            </div>
    },
    {
        'name': 'Donnie',
        'url': '/donnie',
        'content':
            <div className="donnie">
            	<img src="http://s.mlkshk.com/r/103AG" />
            </div>
    },
    {
        'name': 'Raph',
        'url': '/raph',
        'content':
       		<div className="raph">
            	<img src="http://s.mlkshk.com/r/JAUD" />
            </div>
    },
    {
        'name': 'Leo',
        'url': '/leo',
        'content':
        	<div className="leo">
            	<img src="http://s.mlkshk.com/r/ZJPL" />
            </div>
    }
];

React.render(
    <App />,
    document.body
);