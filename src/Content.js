import {MainWrapper, PersonList, PersonItem} from './MyStyledComponent';

export default function ListView({persons, view}) {
  return (
    <MainWrapper>
      <PersonList view={view}>
        {
          persons &&
          persons.map( person => {
            return (
              <PersonItem key={person.id} view={view}>
                <h3>{person.name}</h3>
                <a href={'mailto:' + person.email}>{person.email}</a>
                <a href={'tel:' + person.phone}>{person.phone}</a>
              </PersonItem>
            )
          })
        }
      </PersonList>
    </MainWrapper>
  );
}