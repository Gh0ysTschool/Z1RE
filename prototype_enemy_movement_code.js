/*fetch 
link position
enemy position
enemy direction
enemy transition style
next position
movement timer
towards link flag
on timer expire
    reset timer
    begin new transition (transition style)
        set transitioning flag
else if transitioning
    propose alternate position  
    check collision for validity and sideeffects


transition styles
    random jumps
    stomping back and forth
    runaway
    bury & emerge
    walk steady
    walk erratic
    walk fast
    shuffle

*/
for (i in render_info.room.enemies ){
    let enemy = render_info.room.enemies[i]
    enemy.movement_timer++;
    if(enemy.movement_timer >= enemy.movement_frequency)
    enemy.movement_timer = 0;
    if (enemy.movement_timer == 0){
        //get new target position
    } else {
        enemy.potential_position.x += enemy.movement_pattern[enemy.movement_index%enemy.movement_pattern.length].x
        enemy.potential_position.x += enemy.movement_pattern[enemy.movement_index%enemy.movement_pattern.length].y;
        enemy.movement_index++;
        //check collision
        //if valid
            enemy.position = enemy.potential_position
    }
}