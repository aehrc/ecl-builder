# ECL Builder

This is a React component that allows a user to visually build a SNOMED CT
[Expression Constraint Language (ECL)](http://snomed.org/ecl) query.


## Example Usage

```
import {ExpressionBuilder, ExpressionResult} from 'ecl-builder'
function App() {
  const [currentExpression, setCurrentExpression] = useState<
    string | undefined
  >(undefined);

  return (
      <Box>
        <Box className="expression-builder-container" sx={{ flexGrow: 1 }}>
          <ExpressionBuilder
            expression={currentExpression}
            onChange={setCurrentExpression}
          />
        </Box>
        {currentExpression ? (
          <Box className="expression-result-container" sx={{ flexGrow: 1 }}>
            <ExpressionResult expression={currentExpression} />
          </Box>
        ) : null}
      </Box>
  );
}
```
Copyright © 2022, Commonwealth Scientific and Industrial Research Organisation
(CSIRO) ABN 41 687 119 230. All rights reserved.
