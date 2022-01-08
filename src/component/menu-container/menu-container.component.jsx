import React from "react";
import MenuItem from '../menu-item/menu-item.component';
import '../menu-container/menu-container.styles.scss';

class MenuContainer extends React.Component {

    constructor() {
        super();

        this.state = {
            menuSection: [
                {
                    title: 'hats',
                    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                    id: 1,
                    linkUrl: 'category/hats'
                },
                {
                    title: 'jackets',
                    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                    id: 2,
                    linkUrl: 'category/jackets'
                },
                {
                    title: 'sneakers',
                    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                    id: 3,
                    linkUrl: 'category/sneakers'
                },
                {
                    title: 'womens',
                    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                    size: 'large',
                    id: 4,
                    linkUrl: 'category/womens'
                },
                {
                    title: 'mens',
                    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                    size: 'large',
                    id: 5,
                    linkUrl: 'category/mens'
                }
            ]
        }
    }

    render() {
        return (
            <div className="menu-continer">
                {this.state.menuSection.map(({ id, ...menuItemProps }) => (
                    <MenuItem key={id} {...menuItemProps} />
                ))}

            </div>
        )
    }


}

export default MenuContainer;