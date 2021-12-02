import DiffMatchPatch from 'diff-match-patch';

function remarkDiff(string1, string2)
{
    const dmp = new DiffMatchPatch();
    const diff = dmp.diff_main(string1, string2);
    dmp.diff_cleanupSemantic(diff);
    console.log(diff);
    let finalText = '';
    let openTagRed = '<mark style = "background: #FF0000">';
    let openTagGreen = '<mark style = "background: #00FF00">';
    let closeTag = '</mark>';
    for (let i=0; i < diff.length; i++)
    {
        if (diff[i][0] == -1)
        {
            finalText += openTagRed + diff[i][1] + closeTag;
        }
        else if (diff[i][0] == 0)
        {
            finalText += diff[i][1];
        }
        else if (diff[i][0] == 1)
        {
            finalText += openTagGreen + diff[i][1] + closeTag;
        }
    };
    return finalText;
}