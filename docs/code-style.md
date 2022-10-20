## Code style

### 1. Configure your IDE for lint code
For Visual Studio Code you can add linters settings (for project folder) like this:
```json
{
  "eslint.enable": true,
  "eslint.lintTask.enable": true,
  "eslint.nodePath": "./frontend/node_modules",
  "eslint.onIgnoredFiles": "warn",
  "eslint.run": "onSave",
  "pylint.path": [
    "/home/username/.local/bin/pylint"
  ],
  "pylint.args": [
    "--rcfile=api/.pylintrc"
  ]
}
```

If you unfamiliar with path, or not sure that is right, you can check it:
```bash
$ which pylint
=> /home/username/.local/bin/pylint
```

### 2. Run linters before push
This would be a good practice, when you check code quality before push.
For run Pylint:
```bash
./docker/run_pylint.sh
```

For run ESLint:
```bash
./docker/run_eslint.sh
```

### Methods and classes documentation
Write module and class documentaion in triple single quotes, like:

```pyton
class SquareTestCase(unittest.TestCase):
  '''Tests for 'square' function'''

  def test_for_positive(self):
    '''Squares positive value'''
```

