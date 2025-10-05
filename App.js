        /***
         * 
         * <div id="parent">
         *  <div id="child">
         *      <h1>This is h1 tag</h1>
         *      <h2>This is h2 tag sibling</h2>
         *  </div>
         * </div>
         * 
         * 
         * ReactElement(Object) => HTML(Browser understands)
         * 
         */
        
        const parent = React.createElement('div', {id:'parent'}, 
                        React.createElement('div', {id:'child'}, 
                            [React.createElement('h1', {key:"heading"}, 'This is h1 tag'),
                            React.createElement('h2', {key:"subheading"}, 'This is h2 tag sibling')]
                        )
                    );
        
        const heading = React.createElement('h1', 
            {id:"heading", attriname:"attributevalue"}, 
            'Hello, React!');

        const root = ReactDOM.createRoot(document.getElementById('root'));
        console.log(parent);
        root.render(parent);