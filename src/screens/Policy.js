import React from 'react';
const policyData = [
    {
        id: 1,
        icon: 'fas fa-shopping-bag',
        title: '10000+ products',
        subTitle: '400+ brand'
    },
    {
        id: 2,
        icon: 'fas fa-users',
        title: '2 milion customer',
        subTitle: 'Shop with confidence'
    },
    {
        id: 3,
        icon: 'fa fa-thumbs-up',
        title: 'Genuine',
        subTitle: '100% Genuine'
    },
    {
        id: 4,
        icon: 'fa fa-truck',
        title: 'Cross-continental delivery',
        subTitle: 'Free from $200'
    },
    {
        id: 5,
        icon: 'fas fa-undo',
        title: 'Exchange goods 07 days',
        subTitle: 'All free time'
    },
    {
        id: 6,
        icon: 'fa fa-trophy',
        title: 'VIP guests',
        subTitle: 'Attractive offer'
    },
]
const Policy = () => {
    return (
        <>
            {/* <!-- policy --> */}
            <div className="policy">
                <div className="grid wide">
                    <ul className="policy__list">
                        {
                            policyData && policyData.map((item) => (
                                <li className="policy__item" key={item.id}>
                                    <div className="policy__icon">
                                        <i className={`${item.icon}`}></i>
                                    </div>
                                    <div className="policy__desc">
                                        <h4 className="policy__title">
                                            {item.title}</h4>
                                        <h5 className="policy__sub-title">
                                            {item.subTitle}</h5>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Policy;