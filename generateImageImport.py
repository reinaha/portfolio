import sys
from os import listdir
from os.path import isfile, join, exists

curProject = 'PropertiMaxApp'

if (len(sys.argv) > 1):
    curProject = sys.argv[1]

mypath = './resources' + '/' + curProject

if (not exists(mypath)):
    print("Path: " + mypath + " doesn't exist!")
    sys.exit(0)

onlyfiles = [f for f in listdir(mypath) if isfile(join(mypath, f))]

exportList = []

with open(curProject + '.ts', 'w') as f:
    for file in onlyfiles:
        if (file[0] != '.'):
            fileName = file.split('.')[0]
            importNameInitial = fileName.split('_')
            importName = importNameInitial[0].split('-')
            currentImportName = curProject +  ''.join([im.capitalize() for im in importName[1:]]) 
            exportList.append(currentImportName)
            f.write('import ' + currentImportName + ' from \'@resources/' + curProject + '/' + file + '\';')
            f.write('\n')
    f.write('\n')
    f.write('export { ' + ', '.join(exportList) + ' };')

