import classNames from 'classnames';
import { Tab } from '../../Types/Tab';

type Props = {
  tabs: Tab[];
  selectedTabId: string;
  onTabSelected: (tab: Tab) => void;
};

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  const selectedTab: Tab = tabs.find(({ id }) => {
    return id === selectedTabId;
  }) || tabs[0];

  const handleClick = (tab: Tab) => {
    const currentTab = tabs.find(({ id }) => id === selectedTabId);

    if (currentTab !== tab) {
      onTabSelected(tab);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              className={classNames({ 'is-active': selectedTab.id === tab.id })}
              data-cy="Tab"
            >
              <button
                type="button"
                onClick={() => handleClick(tab)}
              >
                <a
                  href={`#${tab.id}`}
                  data-cy="TabLink"
                >
                  {tab.title}
                </a>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab.content}
      </div>
    </div>
  );
};
